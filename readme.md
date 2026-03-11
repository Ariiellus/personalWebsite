# Ariiellus Personal Website

Static personal website built with Astro and deployed to IPFS/IPNS through GitHub Actions.

Public URL: [https://ariiellus.eth.limo/](https://ariiellus.eth.limo/)

## Stack

- Astro static site
- GitHub Actions for build and deploy
- IPFS for content storage
- IPNS for mutable publishing
- ENS + `eth.limo` for the public entrypoint

## Local development

Install dependencies:

```sh
npm ci
```

Start the dev server:

```sh
npm run dev
```

Create a production build:

```sh
npm run build
```

## Deployment flow

Deployment is defined in [.github/workflows/deploy-ipfs.yml](/Users/DevEnv/Documents/sandbox/personalWebsite/.github/workflows/deploy-ipfs.yml).

On every push to `main`, GitHub Actions:

1. installs dependencies
2. builds the Astro site into `dist/`
3. copies `dist/` to the remote IPFS server over SSH
4. adds the release directory to IPFS
5. publishes the root CID to IPNS using `IPNS_KEY_NAME`
6. verifies that the local node resolves the IPNS name to the new `/ipfs/<cid>` target

The workflow publishes the final root CID from `ipfs add -r . -Q | tail -n 1`. This matters because recursive `ipfs add` returns multiple CIDs.

## Required GitHub secrets

- `SSH_PRIVATE_KEY`
- `SSH_USER`
- `IPFS_SERVER_HOST`
- `SSH_PORT`
- `DEPLOY_PATH`
- `IPNS_KEY_NAME`

## Gateway-safe site rules

This site is built to work on:

- `https://ariiellus.eth.limo/`
- `https://ipfs.io/ipns/<ipns-name>/`
- `https://ipfs.io/ipfs/<cid>/`

To keep that working:

- do not use root-absolute asset paths like `/css/main.css` or `/images/foo.png`
- do not use root-absolute internal links like `/general/writings/`
- use the helper in [src/utils/paths.ts](/Users/DevEnv/Documents/sandbox/personalWebsite/src/utils/paths.ts) for internal links and static assets
- keep canonical and Open Graph metadata centralized in [src/layouts/BaseLayout.astro](/Users/DevEnv/Documents/sandbox/personalWebsite/src/layouts/BaseLayout.astro)

Root-absolute paths work on a normal web root but often break on path-based IPFS/IPNS gateways.

## Troubleshooting

If deployment succeeds but `https://ariiellus.eth.limo/` is broken, check in this order.

### 1. Check the CID directly

Open:

- `https://ipfs.io/ipfs/<cid>/`

If this fails, the published content is wrong or unavailable from the gateway.

### 2. Check IPNS directly

Open:

- `https://ipfs.io/ipns/k51qzi5uqu5dlmqi1uwsk35qk0fv6yt9a8qa7xbg7ex58mn9p3obh37dohh4gk/`
- `https://k51qzi5uqu5dlmqi1uwsk35qk0fv6yt9a8qa7xbg7ex58mn9p3obh37dohh4gk.ipns.dweb.link/`

If `/ipfs/<cid>` works but `/ipns/<name>` does not, the issue is IPNS propagation or gateway resolution.

### 3. Compare against `eth.limo`

If raw IPNS works but `ariiellus.eth.limo` does not, the problem is likely:

- `eth.limo` cache or gateway behavior
- ENS contenthash mismatch
- delayed ENS resolution

### 4. Check the IPFS node

Useful server commands:

```sh
ipfs ls <cid>
ipfs cat <cid>/index.html | head
ipfs name resolve /ipns/k51qzi5uqu5dlmqi1uwsk35qk0fv6yt9a8qa7xbg7ex58mn9p3obh37dohh4gk
ipfs key list -l
```

Expected behavior:

- `ipfs ls <cid>` shows `index.html`, `css/`, `images/`, and content folders
- `ipfs name resolve` returns `/ipfs/<cid>`
- the IPNS key exists on the publishing node

## Metadata behavior

Canonical and social metadata are generated from the Astro `site` config in [astro.config.mjs](/Users/DevEnv/Documents/sandbox/personalWebsite/astro.config.mjs). The canonical public host is `https://ariiellus.eth.limo/`, while runtime navigation and asset loading use relative paths so the site still renders correctly on raw IPFS/IPNS gateways.
