# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to
[Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [2.0.0] - TBD

### Added

- **Crew Plugin**!

  Now you can load crew sprites directly on your game using `crew` plugin:
  ```js
  import { crew } from "@kaplayjs/crew";
  import kaplay from "kaplay";

  kaplay({
      plugins: [crew],
      fonts: "happy",
  });

  // Load crew
  loadCrew("apple");
  loadCrew("apple");
  ```

- Added .ttf version of Happy Font

- New Assets:
  - `kaplayjs`: The new KAPLAY logo
  - `kaplay`: The new KAPLAY logo, without any dinos
  - `ka`: KAPLAY's K
  - `k`: Kaboom.js K
  - `old-kaplay`: Old KAPLAY logo

### Changed

- Remaked Assets:
  - `api_book`
  - `art`
  - `assetbrew`
  - `discord`
  - `play`
  - `plus`

- Changed Assets:
  - `play`: Updated colors
  - `marroc`: Updated description
  - `sukomi`: Updated description

- Brand assets moved to `brandAssets`, so now they are separated from crew
- Font assets moved to `fontAssets`, so now they are separated from crew
- Capitalized various names
