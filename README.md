# lapplandsdjurklinik.se/nyheter

GatsbyJS project to be applied to WordPress site, using gatsby-source-wordpress to fetch data.

## Installation


```bash
git clone https://github.com/ozzbourne/lapplandsdjurklinik.se-nyheter

gatsby develop
```

## Build

Need use of pathPrefix since it is on a subdomain

```
gatsby build --prefix-paths
```

If error on build: empty /public and /.cache (hidden, show with CMD-Shift-. on Mac).


## Main Tech

```
GatbyJS with gatsby-source-wordpress and gatsby-image
Styled Components
```