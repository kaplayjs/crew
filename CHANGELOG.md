# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to
[Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [unreleased]

### Added

- New sprites:
  - Pumpka - @imaginarny

## [2.0.1] - 2025-09-19

### Changed

- Crew data now includes both original and outlined asset version import
  instructions - @imaginarny

### Fixed

- Outlined fonts (e.g. `happy-o`) loaded using crew plugin now use correct
  dimensions - @imaginarny
- TypeScript completion now includes outlined fonts as an option - @imaginarny

## [2.0.0] - 2025-08-25

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
  loadCrew("sprite", "apple");
  loadCrew("sprite", "apple-o");
  ```

- Added .ttf version of Happy Font

- New Brand Assets:
  - `kaplayjs`: The new KAPLAY logo
  - `kaplay`: The new KAPLAY logo, without any dinos
  - `ka`: KAPLAY's K
  - `k`: Kaboom.js K
  - `old-kaplay`: Old KAPLAY logo

- New Sprites:
  - Beantle (Commissioned by Scriptie)
  - Fire (Community asset by Erik)
  - Flowy
  - Jam
  - Sok

- New Icons:
  - Menu
  - Share
  - Arrow
  - Minus
  - Pause
  - Pencil
  - Search
  - History
  - Cross Mark

- New Emojis:
  - Firing
  - Been
  - Beenking
  - Wizarding
  - Burpman Burping

- Support for animated spritesheets added (used for gif emojis)

  ```js
  loadCrew("sprite", "burpman_burping");
  add([sprite("burpman_burping", { anim: "anim" })]);
  ```

- Sounds are now loadable and included:
  - Burp
  - Bean Voice
  - Mark Voice
  - Kaboom2000 Song

- Origin was added to asset details "Official" | "Commission" | "Community"
- Appearances were added - links to where sprite was used
- Aliases were added, like lore alternative names for crew members
- Search terms for assets to find them under different keywords (e.g. bobo -
  fish)
- Added `relatedSprite` and `relatedSound` for linked assets (e.g. Bean, Bean
  Voice)
- Added KAPLAYGROUND import code instructions

### Changed

- Remade Assets:
  - `api_book`
  - `art`
  - `assetbrew`
  - `discord`
  - `github`
  - `paper`
  - `play`
  - `plus`
  - `save`
  - `toolbox`
  - `question_mark`

- Changed Assets:
  - `play`: Updated colors
  - `note`: Fixed white background overflowing in a corner
  - `copied`: Renamed to `check_mark`
  - `lightening`: Renamed to `lightning`

- Assets are now moved to pack folders Brand, Emojis, Icons, KAWorld
- Assets are further subcategorized by kind Sprites, Sounds, Fonts
- Brand assets were moved to `Brand/Sprites`, so now they are separated from
  crew
- Font assets were moved to `KAWorld/Fonts`, so now they are separated from crew
- Updated various crew meta details, descriptions, tags, and secrets
- Capitalized various names
