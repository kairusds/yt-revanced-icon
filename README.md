# yt-revanced-icon
revanced-patches repacked with custom icons using Github Actions.
The custom icons are located in the `branding` directory.
## `all`

<details>

`change-package-name`: Changes the package name.

Target version: `all`

Dependencies: `none`

Excluded by default: `yes`

<details>
<summary>Options</summary>

| Key | Description |
| :---: | :---: |
| `packageName` | The name of the package to rename of the app. |
</details>

---

`enable-android-debugging`: Enables Android debugging capabilities.

Target version: `all`

Dependencies: `none`

Excluded by default: `yes`

---

`export-all-activities`: Makes all app activities exportable.

Target version: `all`

Dependencies: `none`

Excluded by default: `yes`

---

`predictive-back-gesture`: Enables the predictive back gesture introduced on Android 13.

Target version: `all`

Dependencies: `none`

Excluded by default: `yes`

---

`remove-screen-capture-restriction`: Removes the restriction of capturing audio from apps that normally wouldn't allow it.

Target version: `all`

Dependencies: `RemoveCaptureRestrictionResourcePatch`

Excluded by default: `yes`

---

`remove-screenshot-restriction`: Removes the restriction of taking screenshots in apps that normally wouldn't allow it.

Target version: `all`

Dependencies: `none`

Excluded by default: `yes`

---

`spoof-wifi-connection`: Spoofs an existing Wi-Fi connection.

Target version: `all`

Dependencies: `none`

Excluded by default: `yes`

---

</details>

## `at.gv.bmf.bmf2go`

<details>

`remove-bootloader-detection`: Removes the check for an unlocked bootloader.

Target version: `all`

Dependencies: `none`

Excluded by default: `no`

---

`remove-root-detection`: Removes the check for root permissions.

Target version: `all`

Dependencies: `none`

Excluded by default: `no`

---

</details>

## `at.gv.oe.app`

<details>

`remove-root-detection`: Removes the check for root permissions and unlocked bootloader.

Target version: `all`

Dependencies: `none`

Excluded by default: `no`

---

`spoof-signature`: Spoofs the signature of the app.

Target version: `all`

Dependencies: `none`

Excluded by default: `no`

---

</details>

## `co.windyapp.android`

<details>

`unlock-pro`: Unlocks all pro features.

Target version: `all`

Dependencies: `none`

Excluded by default: `no`

---

</details>

## `com.andrewshu.android.reddit`

<details>

`change-oauth-client-id`: Changes the OAuth client ID. The OAuth application type has to be "Installed app" and the redirect URI has to be set to "redditisfun://auth".

Target version: `all`

Dependencies: `none`

Excluded by default: `no`

<details>
<summary>Options</summary>

| Key | Description |
| :---: | :---: |
| `client-id` | The Reddit OAuth client ID. |
</details>

---

</details>

## `com.andrewshu.android.redditdonation`

<details>

`change-oauth-client-id`: Changes the OAuth client ID. The OAuth application type has to be "Installed app" and the redirect URI has to be set to "redditisfun://auth".

Target version: `all`

Dependencies: `none`

Excluded by default: `no`

<details>
<summary>Options</summary>

| Key | Description |
| :---: | :---: |
| `client-id` | The Reddit OAuth client ID. |
</details>

---

</details>

## `com.awedea.nyx`

<details>

`unlock-pro`: Unlocks all pro features.

Target version: `all`

Dependencies: `none`

Excluded by default: `no`

---

</details>

## `com.backdrops.wallpapers`

<details>

`pro-unlock`: Unlocks pro-only functions.

Target version: `4.52`

Dependencies: `none`

Excluded by default: `no`

---

</details>

## `com.candylink.openvpn`

<details>

`unlock-pro`: Unlocks premium features.

Target version: `all`

Dependencies: `none`

Excluded by default: `no`

---

</details>

## `com.dci.dev.androidtwelvewidgets`

<details>

`unlock-paid-widgets`: Unlocks paid widgets of the app

Target version: `all`

Dependencies: `none`

Excluded by default: `no`

---

</details>

## `com.facebook.orca`

<details>

`disable-switching-emoji-to-sticker-in-message-input-field`: Disables switching from emoji to sticker search mode in message input field

Target version: `all`

Dependencies: `none`

Excluded by default: `no`

---

`disable-typing-indicator`: Disables the indicator while typing a message

Target version: `all`

Dependencies: `none`

Excluded by default: `no`

---

`hide-inbox-ads`: Hides ads in inbox.

Target version: `all`

Dependencies: `none`

Excluded by default: `no`

---

</details>

## `com.google.android.apps.recorder`

<details>

`remove-device-restrictions`: Removes restrictions from using the app on any device.

Target version: `all`

Dependencies: `none`

Excluded by default: `no`

---

</details>

## `com.google.android.apps.youtube.music`

<details>

`background-play`: Enables playing music in the background.

Target version: `all`

Dependencies: `none`

Excluded by default: `no`

---

`bypass-certificate-checks`: Bypasses certificate checks which prevent YouTube Music from working on Android Auto.

Target version: `all`

Dependencies: `none`

Excluded by default: `no`

---

`codecs-unlock`: Adds more audio codec options. The new audio codecs usually result in better audio quality.

Target version: `all`

Dependencies: `none`

Excluded by default: `no`

---

`compact-header`: Hides the music category bar at the top of the homepage.

Target version: `all`

Dependencies: `none`

Excluded by default: `yes`

---

`exclusive-audio-playback`: Enables the option to play music without video.

Target version: `all`

Dependencies: `none`

Excluded by default: `no`

---

`hide-get-premium`: Removes all "Get Premium" evidences from the avatar menu.

Target version: `all`

Dependencies: `none`

Excluded by default: `no`

---

`minimized-playback-music`: Enables minimized playback on Kids music.

Target version: `all`

Dependencies: `none`

Excluded by default: `no`

---

`music-video-ads`: Removes ads in the music player.

Target version: `all`

Dependencies: `none`

Excluded by default: `no`

---

`upgrade-button-remover`: Removes the upgrade tab from the pivot bar.

Target version: `all`

Dependencies: `none`

Excluded by default: `no`

---

`vanced-microg-support`: Allows YouTube Music ReVanced to run without root and under a different package name.

Target version: `all`

Dependencies: `MicroGResourcePatch`

Excluded by default: `no`

---

</details>

## `com.google.android.youtube`

<details>

`always-autorepeat`: Always repeats the playing video again.

Target version: `18.16.37`, `18.19.35`, `18.20.39`, `18.23.35`

Dependencies: `Integrations`

Excluded by default: `no`

---

`client-spoof`: Spoofs a patched client to allow playback.

Target version: `18.16.37`, `18.19.35`, `18.20.39`, `18.23.35`

Dependencies: `Spoof signature verification`

Excluded by default: `no`

---

`comments`: Hides components related to comments.

Target version: `18.16.37`, `18.19.35`, `18.20.39`, `18.23.35`

Dependencies: `Settings`, `LithoFilterPatch`

Excluded by default: `no`

---

`copy-video-url`: Adds buttons in player to copy video links.

Target version: `18.16.37`, `18.19.35`, `18.20.39`, `18.23.35`

Dependencies: `CopyVideoUrlResourcePatch`, `Player controls bytecode patch`, `Video information`

Excluded by default: `no`

---

`custom-branding`: Changes the YouTube launcher icon and name to your choice (defaults to ReVanced).

Target version: `all`

Dependencies: `none`

Excluded by default: `no`

<details>
<summary>Options</summary>

| Key | Description |
| :---: | :---: |
| `appName` | The name of the application it will show on your home screen. |
| `iconPath` | A path containing mipmap resource folders with icons. |
</details>

---

`disable-shorts-on-startup`: Disables playing YouTube Shorts when launching YouTube.

Target version: `18.16.37`, `18.19.35`, `18.20.39`, `18.23.35`

Dependencies: `Integrations`, `Settings`

Excluded by default: `no`

---

`disable-auto-captions`: Disable forced captions from being automatically enabled.

Target version: `18.16.37`, `18.19.35`, `18.20.39`, `18.23.35`

Dependencies: `Integrations`, `Settings`

Excluded by default: `no`

---

`disable-fullscreen-panels`: Disables video description and comments panel in fullscreen view.

Target version: `18.16.37`, `18.19.35`, `18.20.39`, `18.23.35`

Dependencies: `Integrations`, `Settings`

Excluded by default: `no`

---

`disable-player-popup-panels`: Disables panels from appearing automatically when going into fullscreen (playlist or live chat).

Target version: `18.16.37`, `18.19.35`, `18.20.39`, `18.23.35`

Dependencies: `Integrations`, `Settings`

Excluded by default: `no`

---

`disable-zoom-haptics`: Disables haptics when zooming.

Target version: `all`

Dependencies: `Settings`

Excluded by default: `no`

---

`enable-debugging`: Adds debugging options.

Target version: `all`

Dependencies: `Integrations`, `Settings`

Excluded by default: `no`

---

`external-downloads`: Adds support to download and save YouTube videos using an external app.

Target version: `18.16.37`, `18.19.35`, `18.20.39`, `18.23.35`

Dependencies: `ExternalDownloadsResourcePatch`, `Player controls bytecode patch`, `Video information`

Excluded by default: `no`

---

`hdr-auto-brightness`: Makes the brightness of HDR videos follow the system default.

Target version: `18.16.37`, `18.19.35`, `18.20.39`, `18.23.35`

Dependencies: `Integrations`, `Settings`

Excluded by default: `no`

---

`hide-shorts-components`: Hides components from YouTube Shorts.

Target version: `18.16.37`, `18.19.35`, `18.20.39`, `18.23.35`

Dependencies: `Integrations`, `LithoFilterPatch`, `HideShortsComponentsResourcePatch`, `ResourceMappingPatch`

Excluded by default: `no`

---

`hide-ads`: Removes general ads.

Target version: `18.16.37`, `18.19.35`, `18.20.39`, `18.23.35`

Dependencies: `Hide get premium`, `HideAdsResourcePatch`, `VerticalScrollPatch`, `FixBackToExitGesturePatch`

Excluded by default: `no`

---

`hide-album-cards`: Hides the album cards below the artist description.

Target version: `18.16.37`, `18.19.35`, `18.20.39`, `18.23.35`

Dependencies: `Integrations`, `AlbumCardsResourcePatch`

Excluded by default: `no`

---

`hide-autoplay-button`: Hides the autoplay button in the video player.

Target version: `18.16.37`, `18.19.35`, `18.20.39`, `18.23.35`

Dependencies: `Integrations`, `Settings`, `ResourceMappingPatch`

Excluded by default: `no`

---

`hide-breaking-news-shelf`: Hides the breaking news shelf on the homepage tab.

Target version: `18.16.37`, `18.19.35`, `18.20.39`, `18.23.35`

Dependencies: `Integrations`, `BreakingNewsResourcePatch`

Excluded by default: `no`

---

`hide-captions-button`: Hides the captions button on video player.

Target version: `18.16.37`, `18.19.35`, `18.20.39`, `18.23.35`

Dependencies: `Integrations`, `Settings`

Excluded by default: `no`

---

`hide-cast-button`: Hides the cast button in the video player.

Target version: `all`

Dependencies: `Integrations`, `Settings`

Excluded by default: `no`

---

`hide-crowdfunding-box`: Hides the crowdfunding box between the player and video description.

Target version: `18.16.37`, `18.19.35`, `18.20.39`, `18.23.35`

Dependencies: `Integrations`, `CrowdfundingBoxResourcePatch`

Excluded by default: `no`

---

`hide-email-address`: Hides the email address in the account switcher.

Target version: `18.16.37`, `18.19.35`, `18.20.39`, `18.23.35`

Dependencies: `Integrations`, `HideEmailAddressResourcePatch`

Excluded by default: `no`

---

`hide-endscreen-cards`: Hides the suggested video cards at the end of a video in fullscreen.

Target version: `18.16.37`, `18.19.35`, `18.20.39`, `18.23.35`

Dependencies: `Integrations`, `HideEndscreenCardsResourcePatch`

Excluded by default: `no`

---

`hide-filter-bar`: Hides the filter bar in video feeds.

Target version: `18.16.37`, `18.19.35`, `18.20.39`, `18.23.35`

Dependencies: `HideFilterBarResourcePatch`

Excluded by default: `no`

---

`hide-floating-microphone-button`: Hides the floating microphone button which appears in search.

Target version: `18.16.37`, `18.19.35`, `18.20.39`, `18.23.35`

Dependencies: `HideFloatingMicrophoneButtonResourcePatch`

Excluded by default: `no`

---

`hide-info-cards`: Hides info cards in videos.

Target version: `18.16.37`, `18.19.35`, `18.20.39`, `18.23.35`

Dependencies: `Integrations`, `HideInfocardsResourcePatch`

Excluded by default: `no`

---

`hide-layout-components`: Hides general layout components.

Target version: `18.16.37`, `18.19.35`, `18.20.39`, `18.23.35`

Dependencies: `LithoFilterPatch`, `Settings`

Excluded by default: `no`

---

`hide-load-more-button`: Hides the button under videos that loads similar videos.

Target version: `18.16.37`, `18.19.35`, `18.20.39`, `18.23.35`

Dependencies: `HideLoadMoreButtonResourcePatch`

Excluded by default: `no`

---

`hide-player-buttons`: Adds the option to hide video player previous and next buttons.

Target version: `18.16.37`, `18.19.35`, `18.20.39`, `18.23.35`

Dependencies: `Integrations`, `Settings`

Excluded by default: `no`

---

`hide-player-overlay`: Hides the dark background overlay from the player when player controls are visible.

Target version: `all`

Dependencies: `HidePlayerOverlayResourcePatch`

Excluded by default: `no`

---

`hide-seekbar`: Hides the seekbar.

Target version: `18.16.37`, `18.19.35`, `18.20.39`, `18.23.35`

Dependencies: `Integrations`, `Settings`, `SeekbarColorBytecodePatch`, `SeekbarPreferencesPatch`

Excluded by default: `no`

---

`hide-timestamp`: Hides timestamp in video player.

Target version: `18.16.37`, `18.19.35`, `18.20.39`, `18.23.35`

Dependencies: `Integrations`, `Settings`

Excluded by default: `no`

---

`hide-video-action-buttons`: Adds the options to hide action buttons under a video.

Target version: `18.16.37`, `18.19.35`, `18.20.39`, `18.23.35`

Dependencies: `ResourceMappingPatch`, `LithoFilterPatch`

Excluded by default: `no`

---

`hide-watch-in-vr`: Hides the option to watch in VR from the player settings flyout panel.

Target version: `18.16.37`, `18.19.35`, `18.20.39`, `18.23.35`

Dependencies: `Integrations`, `Settings`

Excluded by default: `no`

---

`hide-watermark`: Hides creator's watermarks on videos.

Target version: `18.16.37`, `18.19.35`, `18.20.39`, `18.23.35`

Dependencies: `Integrations`, `Settings`

Excluded by default: `no`

---

`minimized-playback`: Enables minimized and background playback.

Target version: `18.16.37`, `18.19.35`, `18.20.39`, `18.23.35`

Dependencies: `Integrations`, `Player type hook`, `Settings`

Excluded by default: `no`

---

`navigation-buttons`: Adds options to hide or change navigation buttons.

Target version: `18.16.37`, `18.19.35`, `18.20.39`, `18.23.35`

Dependencies: `Integrations`, `Settings`, `ResolvePivotBarFingerprintsPatch`

Excluded by default: `no`

---

`old-video-quality-menu`: Shows the old video quality with the advanced video quality options instead of the new one.

Target version: `18.20.39`, `18.23.35`

Dependencies: `Integrations`, `OldVideoQualityMenuResourcePatch`, `LithoFilterPatch`, `BottomSheetHookPatch`

Excluded by default: `no`

---

`open-links-externally`: Open links outside of the app directly in your browser.

Target version: `18.16.37`, `18.19.35`, `18.20.39`, `18.23.35`

Dependencies: `none`

Excluded by default: `no`

---

`playback-speed`: Adds custom playback speeds and ability to remember the playback speed you chose in the video playback speed flyout.

Target version: `18.20.39`, `18.23.35`

Dependencies: `Custom playback speed`, `Remember playback speed`

Excluded by default: `no`

---

`premium-heading`: Shows premium branding on the home screen.

Target version: `all`

Dependencies: `none`

Excluded by default: `no`

---

`remember-video-quality`: Adds the ability to remember the video quality you chose in the video quality flyout.

Target version: `18.19.35`, `18.20.39`, `18.23.35`

Dependencies: `Integrations`, `Video information`, `Settings`

Excluded by default: `no`

---

`remove-player-controls-background`: Removes the background from the video player controls.

Target version: `18.16.37`, `18.19.35`, `18.20.39`, `18.23.35`

Dependencies: `none`

Excluded by default: `yes`

---

`return-youtube-dislike`: Shows the dislike count of videos using the Return YouTube Dislike API.

Target version: `18.16.37`, `18.19.35`, `18.20.39`, `18.23.35`

Dependencies: `Integrations`, `Video id hook`, `ReturnYouTubeDislikeResourcePatch`, `Player type hook`

Excluded by default: `no`

---

`seekbar-tapping`: Enables tap-to-seek on the seekbar of the video player.

Target version: `18.16.37`, `18.19.35`, `18.20.39`, `18.23.35`

Dependencies: `Integrations`, `EnableSeekbarTappingResourcePatch`

Excluded by default: `no`

---

`sponsorblock`: Integrates SponsorBlock which allows skipping video segments such as sponsored content.

Target version: `18.16.37`, `18.19.35`, `18.20.39`, `18.23.35`

Dependencies: `Integrations`, `Video id hook`, `Video information`, `Player type hook`, `Player controls bytecode patch`, `SponsorBlockResourcePatch`

Excluded by default: `no`

---

`spoof-app-version`: Tricks YouTube into thinking, you are running an older version of the app. One of the side effects also includes restoring the old UI.

Target version: `18.16.37`, `18.19.35`, `18.20.39`, `18.23.35`

Dependencies: `Integrations`, `Settings`

Excluded by default: `no`

---

`swipe-controls`: Adds volume and brightness swipe controls.

Target version: `18.16.37`, `18.19.35`, `18.20.39`, `18.23.35`

Dependencies: `Integrations`, `Player type hook`, `SwipeControlsResourcePatch`

Excluded by default: `no`

---

`tablet-mini-player`: Enables the tablet mini player layout.

Target version: `18.16.37`, `18.19.35`, `18.20.39`, `18.23.35`

Dependencies: `Integrations`, `Settings`

Excluded by default: `no`

---

`theme`: Applies a custom theme.

Target version: `all`

Dependencies: `Litho color hook`, `SeekbarColorBytecodePatch`, `ThemeResourcePatch`

Excluded by default: `no`

<details>
<summary>Options</summary>

| Key | Description |
| :---: | :---: |
| `darkThemeBackgroundColor` | The background color of the dark theme. Can be a hex color or a resource reference. |
| `lightThemeBackgroundColor` | The background color of the light theme. Can be a hex color or a resource reference. |
</details>

---

`vanced-microg-support`: Allows YouTube ReVanced to run without root and under a different package name with Vanced MicroG.

Target version: `18.16.37`, `18.19.35`, `18.20.39`, `18.23.35`

Dependencies: `MicroGResourcePatch`, `Hide cast button`, `Client spoof`

Excluded by default: `no`

---

`video-ads`: Removes ads in the video player.

Target version: `18.16.37`, `18.19.35`, `18.20.39`, `18.23.35`

Dependencies: `Integrations`, `Settings`

Excluded by default: `no`

---

`wide-searchbar`: Replaces the search icon with a wide search bar. This will hide the YouTube logo when active.

Target version: `18.16.37`, `18.19.35`, `18.20.39`, `18.23.35`

Dependencies: `Integrations`, `Settings`

Excluded by default: `no`

---

</details>

## `com.instagram.android`

<details>

`hide-timeline-ads`: Removes ads from the timeline.

Target version: `275.0.0.27.98`

Dependencies: `none`

Excluded by default: `no`

---

</details>

## `com.ithebk.expensemanager`

<details>

`unlock-pro`: Unlocks pro features.

Target version: `all`

Dependencies: `none`

Excluded by default: `no`

---

</details>

## `com.laurencedawson.reddit_sync`

<details>

`change-oauth-client-id`: Changes the OAuth client ID. The OAuth application type has to be "Installed app" and the redirect URI has to be set to "http://redditsync/auth".

Target version: `all`

Dependencies: `none`

Excluded by default: `no`

<details>
<summary>Options</summary>

| Key | Description |
| :---: | :---: |
| `client-id` | The Reddit OAuth client ID. |
</details>

---

`disable-ads`: Disables ads.

Target version: `all`

Dependencies: `DisablePiracyDetectionPatch`

Excluded by default: `no`

---

</details>

## `com.laurencedawson.reddit_sync.dev`

<details>

`change-oauth-client-id`: Changes the OAuth client ID. The OAuth application type has to be "Installed app" and the redirect URI has to be set to "http://redditsync/auth".

Target version: `all`

Dependencies: `none`

Excluded by default: `no`

<details>
<summary>Options</summary>

| Key | Description |
| :---: | :---: |
| `client-id` | The Reddit OAuth client ID. |
</details>

---

</details>

## `com.laurencedawson.reddit_sync.pro`

<details>

`change-oauth-client-id`: Changes the OAuth client ID. The OAuth application type has to be "Installed app" and the redirect URI has to be set to "http://redditsync/auth".

Target version: `all`

Dependencies: `none`

Excluded by default: `no`

<details>
<summary>Options</summary>

| Key | Description |
| :---: | :---: |
| `client-id` | The Reddit OAuth client ID. |
</details>

---

</details>

## `com.microblink.photomath`

<details>

`unlock-plus`: Unlocks plus features.

Target version: `8.20.0`

Dependencies: `SignatureDetectionPatch`

Excluded by default: `no`

---

</details>

## `com.myprog.hexedit`

<details>

`disable-ads`: Disables ads in HexEditor.

Target version: `all`

Dependencies: `none`

Excluded by default: `no`

---

</details>

## `com.nis.app`

<details>

`hide-ads`: Removes ads from Inshorts.

Target version: `all`

Dependencies: `none`

Excluded by default: `no`

---

</details>

## `com.onelouder.baconreader`

<details>

`change-oauth-client-id`: Changes the OAuth client ID. The OAuth application type has to be "Installed app" and the redirect URI has to be set to "http://baconreader.com/auth".

Target version: `all`

Dependencies: `none`

Excluded by default: `no`

<details>
<summary>Options</summary>

| Key | Description |
| :---: | :---: |
| `client-id` | The Reddit OAuth client ID. |
</details>

---

</details>

## `com.onelouder.baconreader.premium`

<details>

`change-oauth-client-id`: Changes the OAuth client ID. The OAuth application type has to be "Installed app" and the redirect URI has to be set to "http://baconreader.com/auth".

Target version: `all`

Dependencies: `none`

Excluded by default: `no`

<details>
<summary>Options</summary>

| Key | Description |
| :---: | :---: |
| `client-id` | The Reddit OAuth client ID. |
</details>

---

</details>

## `com.reddit.frontpage`

<details>

`disable-screenshot-popup`: Disables the popup that shows up when taking a screenshot.

Target version: `all`

Dependencies: `none`

Excluded by default: `no`

---

`hide-ads`: Removes ads from the Reddit.

Target version: `all`

Dependencies: `Hide subreddit banner`, `Hide comment ads`

Excluded by default: `no`

---

`premium-icon-reddit`: Unlocks premium Reddit app icons.

Target version: `all`

Dependencies: `none`

Excluded by default: `no`

---

`sanitize-sharing-links`: Removes (tracking) query parameters from the URLs when sharing links.

Target version: `all`

Dependencies: `none`

Excluded by default: `no`

---

</details>

## `com.rubenmayayo.reddit`

<details>

`change-oauth-client-id`: Changes the OAuth client ID. The OAuth application type has to be "Installed app" and the redirect URI has to be set to "http://rubenmayayo.com".

Target version: `all`

Dependencies: `none`

Excluded by default: `no`

<details>
<summary>Options</summary>

| Key | Description |
| :---: | :---: |
| `client-id` | The Reddit OAuth client ID. |
</details>

---

</details>

## `com.scb.phone`

<details>

`remove-debugging-detection`: Removes the USB and wireless debugging checks.

Target version: `all`

Dependencies: `none`

Excluded by default: `yes`

---

</details>

## `com.sony.songpal.mdr`

<details>

`remove-badge-tab`: Removes the badge tab from the activity tab.

Target version: `all`

Dependencies: `none`

Excluded by default: `no`

---

`remove-notification-badge`: Removes the red notification badge from the activity tab.

Target version: `all`

Dependencies: `none`

Excluded by default: `no`

---

</details>

## `com.spotify.lite`

<details>

`enable-on-demand`: Enables listening to songs on-demand, allowing to play any song from playlists, albums or artists without limitations. This does not remove ads.

Target version: `all`

Dependencies: `none`

Excluded by default: `no`

---

</details>

## `com.spotify.music`

<details>

`hide-premium-navbar`: Removes the premium tab from the navbar.

Target version: `all`

Dependencies: `ResourceMappingPatch`

Excluded by default: `no`

---

`spotify-theme`: Applies a custom theme.

Target version: `all`

Dependencies: `none`

Excluded by default: `no`

<details>
<summary>Options</summary>

| Key | Description |
| :---: | :---: |
| `backgroundColor` | The background color. Can be a hex color or a resource reference. |
| `accentColor` | The accent color ('spotify green' by default). Can be a hex color or a resource reference. |
| `accentPressedColor` | The color when accented buttons are pressed |
| `by default slightly darker than accent. Can be a hex color or a resource reference.` | undefined |
</details>

---

</details>

## `com.ss.android.ugc.trill`

<details>

`disable-login-requirement`: Do not force login.

Target version: `all`

Dependencies: `none`

Excluded by default: `no`

---

`downloads`: Removes download restrictions and changes the default path to download to.

Target version: `all`

Dependencies: `Integrations`, `Settings`

Excluded by default: `no`

---

`feed-filter`: Filters tiktok videos: removing ads, removing livestreams.

Target version: `all`

Dependencies: `Integrations`, `Settings`

Excluded by default: `no`

---

`fix-google-login`: Allows logging in with a Google account.

Target version: `all`

Dependencies: `none`

Excluded by default: `no`

---

`hide-ads`: Removes ads from TikTok.

Target version: `all`

Dependencies: `none`

Excluded by default: `no`

---

`playback-speed`: Enables the playback speed option for all videos.

Target version: `all`

Dependencies: `none`

Excluded by default: `no`

---

`settings`: Adds ReVanced settings to TikTok.

Target version: `all`

Dependencies: `Integrations`

Excluded by default: `no`

---

`show-seekbar`: Shows progress bar for all video.

Target version: `all`

Dependencies: `none`

Excluded by default: `no`

---

`sim-spoof`: Spoofs the information which is retrieved from the sim-card.

Target version: `all`

Dependencies: `Integrations`, `Settings`

Excluded by default: `yes`

---

</details>

## `com.teslacoilsw.launcher`

<details>

`unlock-prime`: Unlocks Nova Prime and all functions of the app.

Target version: `all`

Dependencies: `none`

Excluded by default: `no`

---

</details>

## `com.ticktick.task`

<details>

`unlock-themes`: Unlocks all themes that are inaccessible until a certain level is reached.

Target version: `all`

Dependencies: `none`

Excluded by default: `no`

---

</details>

## `com.twitter.android`

<details>

`dynamic-color`: Replaces the default Twitter Blue with the users Material You palette.

Target version: `all`

Dependencies: `none`

Excluded by default: `no`

---

`hide-ads`: Hides ads.

Target version: `all`

Dependencies: `Json hook`

Excluded by default: `no`

---

`hide-recommended-users`: Hides recommended users.

Target version: `all`

Dependencies: `Json hook`

Excluded by default: `no`

---

</details>

## `com.vanced.android.youtube`

<details>

`hide-ads`: Removes general ads.

Target version: `all`

Dependencies: `VerticalScrollPatch`

Excluded by default: `no`

---

</details>

## `com.vsco.cam`

<details>

`unlock-pro`: Unlocks pro features.

Target version: `all`

Dependencies: `none`

Excluded by default: `no`

---

</details>

## `com.wakdev.apps.nfctools.se`

<details>

`unlock-pro`: Unlocks all pro features.

Target version: `all`

Dependencies: `none`

Excluded by default: `no`

---

</details>

## `com.zhiliaoapp.musically`

<details>

`disable-login-requirement`: Do not force login.

Target version: `all`

Dependencies: `none`

Excluded by default: `no`

---

`downloads`: Removes download restrictions and changes the default path to download to.

Target version: `all`

Dependencies: `Integrations`, `Settings`

Excluded by default: `no`

---

`feed-filter`: Filters tiktok videos: removing ads, removing livestreams.

Target version: `all`

Dependencies: `Integrations`, `Settings`

Excluded by default: `no`

---

`fix-google-login`: Allows logging in with a Google account.

Target version: `all`

Dependencies: `none`

Excluded by default: `no`

---

`hide-ads`: Removes ads from TikTok.

Target version: `all`

Dependencies: `none`

Excluded by default: `no`

---

`playback-speed`: Enables the playback speed option for all videos.

Target version: `all`

Dependencies: `none`

Excluded by default: `no`

---

`settings`: Adds ReVanced settings to TikTok.

Target version: `all`

Dependencies: `Integrations`

Excluded by default: `no`

---

`show-seekbar`: Shows progress bar for all video.

Target version: `all`

Dependencies: `none`

Excluded by default: `no`

---

`sim-spoof`: Spoofs the information which is retrieved from the sim-card.

Target version: `all`

Dependencies: `Integrations`, `Settings`

Excluded by default: `yes`

---

</details>

## `com.zombodroid.MemeGenerator`

<details>

`unlock-pro`: Unlocks pro features.

Target version: `4.6364`, `4.6370`, `4.6375`, `4.6377`

Dependencies: `SignatureVerificationPatch`, `LicenseValidationPatch`

Excluded by default: `no`

---

</details>

## `de.dwd.warnapp`

<details>

`promo-code-unlock`: Disables the validation of promo code. Any code will work to unlock all features.

Target version: `all`

Dependencies: `Spoof cert patch`

Excluded by default: `no`

---

</details>

## `eu.faircode.netguard`

<details>

`remove-broadcasts-restriction`: Enables starting/stopping NetGuard via broadcasts.

Target version: `all`

Dependencies: `none`

Excluded by default: `yes`

---

</details>

## `free.reddit.news`

<details>

`change-oauth-client-id`: Changes the OAuth client ID. The OAuth application type has to be "Installed app" and the redirect URI has to be set to "dbrady://relay".

Target version: `all`

Dependencies: `none`

Excluded by default: `no`

<details>
<summary>Options</summary>

| Key | Description |
| :---: | :---: |
| `client-id` | The Reddit OAuth client ID. |
</details>

---

</details>

## `ginlemon.iconpackstudio`

<details>

`unlock-pro`: Unlocks all pro features.

Target version: `all`

Dependencies: `none`

Excluded by default: `no`

---

</details>

## `io.yuka.android`

<details>

`unlock-premium`: Unlocks premium features.

Target version: `all`

Dependencies: `none`

Excluded by default: `no`

---

</details>

## `jp.pxv.android`

<details>

`hide-ads`: Hides ads.

Target version: `all`

Dependencies: `none`

Excluded by default: `no`

---

</details>

## `me.ccrama.redditslide`

<details>

`change-oauth-client-id`: Changes the OAuth client ID. The OAuth application type has to be "Installed app" and the redirect URI has to be set to "http://www.ccrama.me".

Target version: `all`

Dependencies: `none`

Excluded by default: `no`

<details>
<summary>Options</summary>

| Key | Description |
| :---: | :---: |
| `client-id` | The Reddit OAuth client ID. |
</details>

---

</details>

## `ml.docilealligator.infinityforreddit`

<details>

`change-oauth-client-id`: Changes the OAuth client ID. The OAuth application type has to be "Installed app" and the redirect URI has to be set to "infinity://localhost".

Target version: `all`

Dependencies: `none`

Excluded by default: `no`

<details>
<summary>Options</summary>

| Key | Description |
| :---: | :---: |
| `client-id` | The Reddit OAuth client ID. |
</details>

---

</details>

## `net.binarymode.android.irplus`

<details>

`remove-ads`: Removes all ads from the app.

Target version: `all`

Dependencies: `none`

Excluded by default: `no`

---

</details>

## `net.dinglisch.android.taskerm`

<details>

`unlock-trial`: Unlocks the trial version.

Target version: `all`

Dependencies: `none`

Excluded by default: `no`

---

</details>

## `org.totschnig.myexpenses`

<details>

`unlock-pro`: Unlocks all professional features.

Target version: `3.4.9`

Dependencies: `none`

Excluded by default: `no`

---

</details>

## `reddit.news`

<details>

`change-oauth-client-id`: Changes the OAuth client ID. The OAuth application type has to be "Installed app" and the redirect URI has to be set to "dbrady://relay".

Target version: `all`

Dependencies: `none`

Excluded by default: `no`

<details>
<summary>Options</summary>

| Key | Description |
| :---: | :---: |
| `client-id` | The Reddit OAuth client ID. |
</details>

---

</details>

## `tv.trakt.trakt`

<details>

`unlock-pro`: Unlocks pro features.

Target version: `1.1.1`

Dependencies: `none`

Excluded by default: `no`

---

</details>

## `tv.twitch.android.app`

<details>

`auto-claim-channel-points`: Automatically claim Channel Points.

Target version: `15.4.1`

Dependencies: `Settings`

Excluded by default: `no`

---

`block-audio-ads`: Blocks audio ads in streams and VODs.

Target version: `15.4.1`

Dependencies: `Integrations`, `Settings`

Excluded by default: `no`

---

`block-embedded-ads`: Blocks embedded stream ads using services like TTV.lol or PurpleAdBlocker.

Target version: `15.4.1`

Dependencies: `Block video ads`, `Integrations`, `Settings`

Excluded by default: `no`

---

`block-video-ads`: Blocks video ads in streams and VODs.

Target version: `15.4.1`

Dependencies: `Integrations`, `Settings`

Excluded by default: `no`

---

`debug-mode`: Enables Twitch's internal debugging mode.

Target version: `all`

Dependencies: `Integrations`, `Settings`

Excluded by default: `yes`

---

`settings`: Adds settings menu to Twitch.

Target version: `all`

Dependencies: `Integrations`, `SettingsResourcePatch`

Excluded by default: `no`

---

`show-deleted-messages`: Shows deleted chat messages behind a clickable spoiler.

Target version: `15.4.1`

Dependencies: `Integrations`, `Settings`

Excluded by default: `no`

---

</details>

