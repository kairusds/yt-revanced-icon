# yt-revanced-icon
revanced-patches repacked with custom icons using Github Actions.
The custom icons are located in the `branding` directory.
## `all`

<details>

`export-all-activities`: Makes all app activities exportable.

Target version: `all`

Excluded by default: `no`

---

`remove-screen-capture-restriction`: Removes the restriction of capturing audio from apps that normally wouldn't allow it.

Target version: `all`

Excluded by default: `no`

---

`remove-screenshot-restriction`: Removes the restriction of taking screenshots in apps that normally wouldn't allow it.

Target version: `all`

Excluded by default: `no`

---

`spoof-wi-fi-connection`: Spoofs an existing Wi-Fi connection.

Target version: `all`

Excluded by default: `no`

---

`predictive-back-gesture`: Enables the predictive back gesture introduced on Android 13.

Target version: `all`

Excluded by default: `no`

---

`override-certificate-pinning`: Overrides certificate pinning, allowing to inspect traffic via a proxy.

Target version: `all`

Excluded by default: `no`

---

`change-package-name`: Appends ".revanced" to the package name by default.

Target version: `all`

Excluded by default: `no`

<details>
<summary>Options</summary>

| Key | Description |
| :---: | :---: |
| `packageName` | The name of the package to rename the app to. |
</details>

---

`enable-android-debugging`: Enables Android debugging capabilities. This can slow down the app.

Target version: `all`

Excluded by default: `no`

---

</details>

## `at.gv.bka.serviceportal`

<details>

`remove-root-detection`: Removes the check for root permissions and unlocked bootloader.

Target version: `all`

Excluded by default: `no`

---

</details>

## `at.gv.bmf.bmf2go`

<details>

`remove-root-detection`: Removes the check for root permissions.

Target version: `all`

Excluded by default: `no`

---

`remove-bootloader-detection`: Removes the check for an unlocked bootloader.

Target version: `all`

Excluded by default: `no`

---

</details>

## `at.gv.oe.app`

<details>

`spoof-signature`: Spoofs the signature of the app.

Target version: `all`

Excluded by default: `no`

---

`remove-root-detection`: Removes the check for root permissions and unlocked bootloader.

Target version: `all`

Excluded by default: `no`

---

</details>

## `co.windyapp.android`

<details>

`unlock-pro`: Unlocks all pro features.

Target version: `all`

Excluded by default: `no`

---

</details>

## `com.adobe.lrmobile`

<details>

`unlock-premium`: null

Target version: `all`

Excluded by default: `no`

---

`disable-mandatory-login`: null

Target version: `all`

Excluded by default: `no`

---

</details>

## `com.andrewshu.android.reddit`

<details>

`spoof-client`: Restores functionality of the app by using custom client ID's.

Target version: `all`

Excluded by default: `no`

<details>
<summary>Options</summary>

| Key | Description |
| :---: | :---: |
| `client-id` | The Reddit OAuth client ID. You can get your client ID from https |
</details>

---

</details>

## `com.andrewshu.android.redditdonation`

<details>

`spoof-client`: Restores functionality of the app by using custom client ID's.

Target version: `all`

Excluded by default: `no`

<details>
<summary>Options</summary>

| Key | Description |
| :---: | :---: |
| `client-id` | The Reddit OAuth client ID. You can get your client ID from https |
</details>

---

</details>

## `com.awedea.nyx`

<details>

`unlock-pro`: null

Target version: `all`

Excluded by default: `no`

---

</details>

## `com.backdrops.wallpapers`

<details>

`pro-unlock`: null

Target version: `4.52`

Excluded by default: `no`

---

</details>

## `com.candylink.openvpn`

<details>

`unlock-pro`: null

Target version: `all`

Excluded by default: `no`

---

</details>

## `com.dci.dev.androidtwelvewidgets`

<details>

`unlock-paid-widgets`: Unlocks paid widgets of the app

Target version: `all`

Excluded by default: `no`

---

</details>

## `com.facebook.orca`

<details>

`disable-typing-indicator`: Disables the indicator while typing a message.

Target version: `all`

Excluded by default: `no`

---

`disable-switching-emoji-to-sticker`: Disables switching from emoji to sticker search mode in message input field.

Target version: `all`

Excluded by default: `no`

---

`hide-inbox-ads`: Hides ads in inbox.

Target version: `all`

Excluded by default: `no`

---

</details>

## `com.google.android.apps.recorder`

<details>

`remove-device-restrictions`: Removes restrictions from using the app on any device. Requires mounting patched app over original.

Target version: `all`

Excluded by default: `no`

---

</details>

## `com.google.android.apps.youtube.music`

<details>

`exclusive-audio-playback`: Enables the option to play audio without video.

Target version: `all`

Excluded by default: `no`

---

`codecs-unlock`: Adds more audio codec options. The new audio codecs usually result in better audio quality.

Target version: `all`

Excluded by default: `no`

---

`permanent-repeat`: Permanently remember your repeating preference even if the playlist ends or another track is played.

Target version: `all`

Excluded by default: `no`

---

`permanent-shuffle`: Permanently remember your shuffle preference even if the playlist ends or another track is played.

Target version: `all`

Excluded by default: `no`

---

`music-video-ads`: Removes ads in the music player.

Target version: `all`

Excluded by default: `no`

---

`background-play`: Enables playing music in the background.

Target version: `all`

Excluded by default: `no`

---

`vanced-microg-support`: Allows YouTube Music to run without root and under a different package name.

Target version: `all`

Excluded by default: `no`

---

`bypass-certificate-checks`: Bypasses certificate checks which prevent YouTube Music from working on Android Auto.

Target version: `all`

Excluded by default: `no`

---

`hide-get-premium`: Removes all "Get Premium" evidences from the avatar menu.

Target version: `all`

Excluded by default: `no`

---

`minimized-playback-music`: Enables minimized playback on Kids music.

Target version: `all`

Excluded by default: `no`

---

`compact-header`: Hides the music category bar at the top of the homepage.

Target version: `all`

Excluded by default: `no`

---

`remove-upgrade-button`: Removes the upgrade tab from the pivot bar.

Target version: `all`

Excluded by default: `no`

---

</details>

## `com.google.android.youtube`

<details>

`external-downloads`: Adds support to download and save YouTube videos using an external app.

Target version: `18.16.37`, `18.19.35`, `18.20.39`, `18.23.35`, `18.29.38`, `18.32.39`, `18.37.36`

Excluded by default: `no`

---

`copy-video-url`: Adds buttons in player to copy video links.

Target version: `18.16.37`, `18.19.35`, `18.20.39`, `18.23.35`, `18.29.38`, `18.32.39`, `18.37.36`

Excluded by default: `no`

---

`seekbar-tapping`: Enables tap-to-seek on the seekbar of the video player.

Target version: `18.16.37`, `18.19.35`, `18.20.39`, `18.23.35`, `18.29.38`, `18.32.39`, `18.37.36`

Excluded by default: `no`

---

`swipe-controls`: Adds volume and brightness swipe controls.

Target version: `18.16.37`, `18.19.35`, `18.20.39`, `18.23.35`, `18.29.38`, `18.32.39`, `18.37.36`

Excluded by default: `no`

---

`hide-ads`: Removes general ads.

Target version: `18.16.37`, `18.19.35`, `18.20.39`, `18.23.35`, `18.29.38`, `18.32.39`, `18.37.36`

Excluded by default: `no`

---

`hide-"get-youtube-premium"-advertisements`: Hides YouTube Premium advertisements under video player.

Target version: `18.16.37`, `18.19.35`, `18.20.39`, `18.23.35`, `18.29.38`, `18.32.39`, `18.37.36`

Excluded by default: `no`

---

`video-ads`: Removes ads in the video player.

Target version: `18.16.37`, `18.19.35`, `18.20.39`, `18.23.35`, `18.29.38`, `18.32.39`, `18.37.36`

Excluded by default: `no`

---

`old-video-quality-menu`: Shows the old video quality with the advanced video quality options instead of the new one.

Target version: `18.20.39`, `18.23.35`, `18.29.38`, `18.32.39`, `18.37.36`

Excluded by default: `no`

---

`playback-speed`: Adds custom playback speeds and ability to remember the playback speed you chose in the video playback speed flyout.

Target version: `18.20.39`, `18.23.35`, `18.29.38`, `18.32.39`, `18.37.36`

Excluded by default: `no`

---

`hdr-auto-brightness`: Makes the brightness of HDR videos follow the system default.

Target version: `18.16.37`, `18.19.35`, `18.20.39`, `18.23.35`, `18.29.38`, `18.32.39`, `18.37.36`

Excluded by default: `no`

---

`remember-video-quality`: Adds the ability to remember the video quality you chose in the video quality flyout.

Target version: `18.19.35`, `18.20.39`, `18.23.35`, `18.29.38`, `18.32.39`, `18.37.36`

Excluded by default: `no`

---

`always-autorepeat`: Always repeats the playing video again.

Target version: `18.16.37`, `18.19.35`, `18.20.39`, `18.23.35`, `18.29.38`, `18.32.39`, `18.37.36`

Excluded by default: `no`

---

`vanced-microg-support`: Allows YouTube to run without root and under a different package name with Vanced MicroG.

Target version: `18.16.37`, `18.19.35`, `18.20.39`, `18.23.35`, `18.29.38`, `18.32.39`, `18.37.36`

Excluded by default: `no`

---

`minimized-playback`: Enables minimized and background playback.

Target version: `18.16.37`, `18.19.35`, `18.20.39`, `18.23.35`, `18.29.38`, `18.32.39`, `18.37.36`

Excluded by default: `no`

---

`disable-zoom-haptics`: Disables haptics when zooming.

Target version: `all`

Excluded by default: `no`

---

`enable-debugging`: Adds debugging options.

Target version: `all`

Excluded by default: `no`

---

`bypass-url-redirects`: Bypass URL redirects and open the original URL directly.

Target version: `18.16.37`, `18.19.35`, `18.20.39`, `18.23.35`, `18.29.38`, `18.32.39`, `18.37.36`

Excluded by default: `no`

---

`open-links-externally`: Open links outside of the app directly in your browser.

Target version: `18.16.37`, `18.19.35`, `18.20.39`, `18.23.35`, `18.29.38`, `18.32.39`, `18.37.36`

Excluded by default: `no`

---

`client-spoof`: Spoofs the client to allow playback.

Target version: `18.16.37`, `18.19.35`, `18.20.39`, `18.23.35`, `18.29.38`, `18.32.39`, `18.37.36`

Excluded by default: `no`

---

`hide-filter-bar`: Hides the filter bar in video feeds.

Target version: `18.16.37`, `18.19.35`, `18.20.39`, `18.23.35`, `18.29.38`, `18.32.39`, `18.37.36`

Excluded by default: `no`

---

`hide-timestamp`: Hides timestamp in video player.

Target version: `18.16.37`, `18.19.35`, `18.20.39`, `18.23.35`, `18.29.38`, `18.32.39`, `18.37.36`

Excluded by default: `no`

---

`hide-"load-more"-button`: Hides the button under videos that loads similar videos.

Target version: `18.16.37`, `18.19.35`, `18.20.39`, `18.23.35`, `18.29.38`, `18.32.39`, `18.37.36`

Excluded by default: `no`

---

`hide-layout-components`: Hides general layout components.

Target version: `18.32.39`, `18.37.36`

Excluded by default: `no`

---

`hide-breaking-news-shelf`: Hides the breaking news shelf on the homepage tab.

Target version: `18.16.37`, `18.19.35`, `18.20.39`, `18.23.35`, `18.29.38`, `18.32.39`, `18.37.36`

Excluded by default: `no`

---

`hide-endscreen-cards`: Hides the suggested video cards at the end of a video in fullscreen.

Target version: `18.16.37`, `18.19.35`, `18.20.39`, `18.23.35`, `18.29.38`, `18.32.39`, `18.37.36`

Excluded by default: `no`

---

`hide-floating-microphone-button`: Hides the floating microphone button which appears in search.

Target version: `18.16.37`, `18.19.35`, `18.20.39`, `18.23.35`, `18.29.38`, `18.32.39`, `18.37.36`

Excluded by default: `no`

---

`hide-watermark`: Hides creator's watermarks on videos.

Target version: `18.16.37`, `18.19.35`, `18.20.39`, `18.23.35`, `18.29.38`, `18.32.39`, `18.37.36`

Excluded by default: `no`

---

`comments`: Hides components related to comments.

Target version: `18.16.37`, `18.19.35`, `18.20.39`, `18.23.35`, `18.29.38`, `18.32.39`, `18.37.36`

Excluded by default: `no`

---

`hide-album-cards`: Hides the album cards below the artist description.

Target version: `18.16.37`, `18.19.35`, `18.20.39`, `18.23.35`, `18.29.38`, `18.32.39`, `18.37.36`

Excluded by default: `no`

---

`hide-email-address`: Hides the email address in the account switcher.

Target version: `18.16.37`, `18.19.35`, `18.20.39`, `18.23.35`, `18.29.38`, `18.32.39`, `18.37.36`

Excluded by default: `no`

---

`hide-seekbar`: Hides the seekbar.

Target version: `18.16.37`, `18.19.35`, `18.20.39`, `18.23.35`, `18.29.38`, `18.32.39`, `18.37.36`

Excluded by default: `no`

---

`hide-shorts-components`: Hides components from YouTube Shorts.

Target version: `18.16.37`, `18.19.35`, `18.20.39`, `18.23.35`, `18.29.38`, `18.32.39`, `18.37.36`

Excluded by default: `no`

---

`hide-crowdfunding-box`: Hides the crowdfunding box between the player and video description.

Target version: `18.16.37`, `18.19.35`, `18.20.39`, `18.23.35`, `18.29.38`, `18.32.39`, `18.37.36`

Excluded by default: `no`

---

`hide-info-cards`: Hides info cards in videos.

Target version: `18.16.37`, `18.19.35`, `18.20.39`, `18.23.35`, `18.29.38`, `18.32.39`, `18.37.36`

Excluded by default: `no`

---

`player-flyout-menu`: Hides player flyout menu items.

Target version: `18.16.37`, `18.19.35`, `18.20.39`, `18.23.35`, `18.29.38`, `18.32.39`, `18.37.36`

Excluded by default: `no`

---

`hide-captions-button`: Hides the captions button on video player.

Target version: `18.16.37`, `18.19.35`, `18.20.39`, `18.23.35`, `18.29.38`, `18.32.39`, `18.37.36`

Excluded by default: `no`

---

`hide-autoplay-button`: Hides the autoplay button in the video player.

Target version: `18.16.37`, `18.19.35`, `18.20.39`, `18.23.35`, `18.29.38`, `18.32.39`, `18.37.36`

Excluded by default: `no`

---

`navigation-buttons`: Adds options to hide or change navigation buttons.

Target version: `18.16.37`, `18.19.35`, `18.20.39`, `18.23.35`, `18.29.38`, `18.32.39`, `18.37.36`

Excluded by default: `no`

---

`hide-video-action-buttons`: Adds the options to hide action buttons under a video.

Target version: `18.16.37`, `18.19.35`, `18.20.39`, `18.23.35`, `18.29.38`, `18.32.39`, `18.37.36`

Excluded by default: `no`

---

`hide-cast-button`: Hides the cast button in the video player.

Target version: `all`

Excluded by default: `no`

---

`hide-player-buttons`: Adds the option to hide video player previous and next buttons.

Target version: `18.16.37`, `18.19.35`, `18.20.39`, `18.23.35`, `18.29.38`, `18.32.39`, `18.37.36`

Excluded by default: `no`

---

`disable-auto-captions`: Disable forced captions from being automatically enabled.

Target version: `18.16.37`, `18.19.35`, `18.20.39`, `18.23.35`, `18.29.38`, `18.32.39`, `18.37.36`

Excluded by default: `no`

---

`wide-searchbar`: Replaces the search icon with a wide search bar. This will hide the YouTube logo when active.

Target version: `18.16.37`, `18.19.35`, `18.20.39`, `18.23.35`, `18.29.38`, `18.32.39`, `18.37.36`

Excluded by default: `no`

---

`enable-tablet-layout`: Spoofs the device form factor to a tablet which enables the tablet layout.

Target version: `all`

Excluded by default: `no`

---

`disable-shorts-on-startup`: Disables playing YouTube Shorts when launching YouTube.

Target version: `18.16.37`, `18.19.35`, `18.20.39`, `18.23.35`, `18.29.38`, `18.32.39`, `18.37.36`

Excluded by default: `no`

---

`theme`: Applies a custom theme.

Target version: `all`

Excluded by default: `no`

<details>
<summary>Options</summary>

| Key | Description |
| :---: | :---: |
| `darkThemeBackgroundColor` | The background color of the dark theme. Can be a hex color or a resource reference. |
| `lightThemeBackgroundColor` | The background color of the light theme. Can be a hex color or a resource reference. |
</details>

---

`disable-player-popup-panels`: Disables panels from appearing automatically when going into fullscreen (playlist or live chat).

Target version: `18.16.37`, `18.19.35`, `18.20.39`, `18.23.35`, `18.29.38`, `18.32.39`, `18.37.36`

Excluded by default: `no`

---

`sponsorblock`: Integrates SponsorBlock which allows skipping video segments such as sponsored content.

Target version: `18.16.37`, `18.19.35`, `18.20.39`, `18.23.35`, `18.29.38`, `18.32.39`, `18.37.36`

Excluded by default: `no`

---

`custom-branding`: Changes the YouTube launcher icon and name to your choice (defaults to ReVanced).

Target version: `all`

Excluded by default: `no`

<details>
<summary>Options</summary>

| Key | Description |
| :---: | :---: |
| `appName` | The name of the application it will show on your home screen. |
| `iconPath` | A path containing mipmap resource folders with icons. |
</details>

---

`premium-heading`: Show or hide the premium heading.

Target version: `all`

Excluded by default: `no`

<details>
<summary>Options</summary>

| Key | Description |
| :---: | :---: |
| `usePremiumHeading` | Whether to use the premium heading. |
</details>

---

`return-youtube-dislike`: Shows the dislike count of videos using the Return YouTube Dislike API.

Target version: `18.32.39`

Excluded by default: `no`

---

`tablet-mini-player`: Enables the tablet mini player layout.

Target version: `18.16.37`, `18.19.35`, `18.20.39`, `18.23.35`, `18.29.38`, `18.32.39`, `18.37.36`

Excluded by default: `no`

---

`spoof-app-version`: Tricks YouTube into thinking you are running an older version of the app. One of the side effects also includes restoring the old UI.

Target version: `18.16.37`, `18.19.35`, `18.20.39`, `18.23.35`, `18.29.38`, `18.32.39`, `18.37.36`

Excluded by default: `no`

---

`alternative-thumbnails`: Adds options to replace video thumbnails with still image captures of the video.

Target version: `18.20.39`, `18.23.35`, `18.29.38`, `18.32.39`, `18.37.36`

Excluded by default: `no`

---

`custom-player-overlay-opacity`: Change the opacity of the player background, when player controls are visible.

Target version: `all`

Excluded by default: `no`

---

`remove-player-controls-background`: Removes the background from the video player controls.

Target version: `18.16.37`, `18.19.35`, `18.20.39`, `18.23.35`, `18.29.38`, `18.32.39`, `18.37.36`

Excluded by default: `no`

---

</details>

## `com.instagram.android`

<details>

`hide-timeline-ads`: Removes ads from the timeline.

Target version: `275.0.0.27.98`

Excluded by default: `no`

---

</details>

## `com.ithebk.expensemanager`

<details>

`unlock-pro`: null

Target version: `all`

Excluded by default: `no`

---

</details>

## `com.laurencedawson.reddit_sync`

<details>

`disable-ads`: null

Target version: `all`

Excluded by default: `no`

---

`disable-sync-for-lemmy-bottom-sheet`: Disables the bottom sheet at the startup that asks you to signup to "Sync for Lemmy".

Target version: `v23.06.30-13:39`

Excluded by default: `no`

---

`spoof-client`: Restores functionality of the app by using custom client ID's.

Target version: `all`

Excluded by default: `no`

<details>
<summary>Options</summary>

| Key | Description |
| :---: | :---: |
| `client-id` | The Reddit OAuth client ID. You can get your client ID from https |
</details>

---

</details>

## `com.laurencedawson.reddit_sync.dev`

<details>

`disable-sync-for-lemmy-bottom-sheet`: Disables the bottom sheet at the startup that asks you to signup to "Sync for Lemmy".

Target version: `all`

Excluded by default: `no`

---

`spoof-client`: Restores functionality of the app by using custom client ID's.

Target version: `all`

Excluded by default: `no`

<details>
<summary>Options</summary>

| Key | Description |
| :---: | :---: |
| `client-id` | The Reddit OAuth client ID. You can get your client ID from https |
</details>

---

</details>

## `com.laurencedawson.reddit_sync.pro`

<details>

`disable-sync-for-lemmy-bottom-sheet`: Disables the bottom sheet at the startup that asks you to signup to "Sync for Lemmy".

Target version: `all`

Excluded by default: `no`

---

`spoof-client`: Restores functionality of the app by using custom client ID's.

Target version: `all`

Excluded by default: `no`

<details>
<summary>Options</summary>

| Key | Description |
| :---: | :---: |
| `client-id` | The Reddit OAuth client ID. You can get your client ID from https |
</details>

---

</details>

## `com.microblink.photomath`

<details>

`spoof-device-id`: Spoofs device ID to mitigate manual bans by developers.

Target version: `all`

Excluded by default: `no`

---

`unlock-plus`: null

Target version: `all`

Excluded by default: `no`

---

</details>

## `com.myprog.hexedit`

<details>

`disable-ads`: null

Target version: `all`

Excluded by default: `no`

---

</details>

## `com.nis.app`

<details>

`hide-ads`: null

Target version: `all`

Excluded by default: `no`

---

</details>

## `com.onelouder.baconreader`

<details>

`spoof-client`: Restores functionality of the app by using custom client ID's.

Target version: `all`

Excluded by default: `no`

<details>
<summary>Options</summary>

| Key | Description |
| :---: | :---: |
| `client-id` | The Reddit OAuth client ID. You can get your client ID from https |
</details>

---

</details>

## `com.onelouder.baconreader.premium`

<details>

`spoof-client`: Restores functionality of the app by using custom client ID's.

Target version: `all`

Excluded by default: `no`

<details>
<summary>Options</summary>

| Key | Description |
| :---: | :---: |
| `client-id` | The Reddit OAuth client ID. You can get your client ID from https |
</details>

---

</details>

## `com.reddit.frontpage`

<details>

`hide-ads`: null

Target version: `all`

Excluded by default: `no`

---

`sanitize-sharing-links`: Removes (tracking) query parameters from the URLs when sharing links.

Target version: `all`

Excluded by default: `no`

---

`disable-screenshot-popup`: Disables the popup that shows up when taking a screenshot.

Target version: `all`

Excluded by default: `no`

---

`unlock-premium-reddit-icons`: null

Target version: `all`

Excluded by default: `no`

---

</details>

## `com.rubenmayayo.reddit`

<details>

`spoof-client`: Restores functionality of the app by using custom client ID's.

Target version: `all`

Excluded by default: `no`

<details>
<summary>Options</summary>

| Key | Description |
| :---: | :---: |
| `client-id` | The Reddit OAuth client ID. You can get your client ID from https |
</details>

---

</details>

## `com.scb.phone`

<details>

`remove-debugging-detection`: Removes the USB and wireless debugging checks.

Target version: `all`

Excluded by default: `no`

---

</details>

## `com.sony.songpal.mdr`

<details>

`remove-badge-tab`: Removes the badge tab from the activity tab.

Target version: `all`

Excluded by default: `no`

---

`remove-notification-badge`: Removes the red notification badge from the activity tab.

Target version: `all`

Excluded by default: `no`

---

</details>

## `com.spotify.lite`

<details>

`enable-on-demand`: Enables listening to songs on-demand, allowing to play any song from playlists, albums or artists without limitations. This does not remove ads.

Target version: `all`

Excluded by default: `no`

---

</details>

## `com.spotify.music`

<details>

`hide-premium-navbar`: Removes the premium tab from the navbar.

Target version: `all`

Excluded by default: `no`

---

`custom-theme`: Applies a custom theme.

Target version: `all`

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

`feed-filter`: Filters tiktok videos: removing ads, removing livestreams.

Target version: `all`

Excluded by default: `no`

---

`downloads`: Removes download restrictions and changes the default path to download to.

Target version: `30.8.4`

Excluded by default: `no`

---

`playback-speed`: Enables the playback speed option for all videos.

Target version: `all`

Excluded by default: `no`

---

`show-seekbar`: Shows progress bar for all video.

Target version: `all`

Excluded by default: `no`

---

`hide-ads`: null

Target version: `30.8.4`

Excluded by default: `no`

---

`sim-spoof`: Spoofs the information which is retrieved from the SIM card.

Target version: `all`

Excluded by default: `no`

---

`disable-login-requirement`: null

Target version: `all`

Excluded by default: `no`

---

`fix-google-login`: Allows logging in with a Google account.

Target version: `all`

Excluded by default: `no`

---

`settings`: Adds ReVanced settings to TikTok.

Target version: `30.8.4`

Excluded by default: `no`

---

</details>

## `com.strava`

<details>

`disable-subscription-suggestions`: null

Target version: `320.12`

Excluded by default: `no`

---

`unlock-subscription-features`: Unlocks "Routes", "Matched Runs" and "Segment Efforts".

Target version: `320.12`

Excluded by default: `no`

---

</details>

## `com.ticktick.task`

<details>

`unlock-themes`: Unlocks all themes that are inaccessible until a certain level is reached.

Target version: `all`

Excluded by default: `no`

---

</details>

## `com.tumblr`

<details>

`disable-dashboard-ads`: Disables ads in the dashboard.

Target version: `all`

Excluded by default: `no`

---

`disable-gift-message-popup`: Disables the popup suggesting to buy TumblrMart items for other people.

Target version: `all`

Excluded by default: `no`

---

`disable-in-app-update`: Disables the in-app update check and update prompt.

Target version: `all`

Excluded by default: `no`

---

`disable-blog-notification-reminder`: Disables the reminder to enable notifications for blogs you visit.

Target version: `all`

Excluded by default: `no`

---

`disable-tumblr-live`: Disable the Tumblr Live tab button and dashboard carousel.

Target version: `all`

Excluded by default: `no`

---

</details>

## `com.twitter.android`

<details>

`hide-ads`: Hides ads.

Target version: `all`

Excluded by default: `no`

---

`hide-recommended-users`: null

Target version: `all`

Excluded by default: `no`

---

`dynamic-color`: Replaces the default Twitter Blue with the user's Material You palette.

Target version: `all`

Excluded by default: `no`

---

</details>

## `com.vanced.android.youtube`

<details>

`hide-ads`: Removes general ads.

Target version: `all`

Excluded by default: `no`

---

</details>

## `com.vsco.cam`

<details>

`unlock-pro`: Unlocks pro features.

Target version: `all`

Excluded by default: `no`

---

</details>

## `com.wakdev.apps.nfctools.se`

<details>

`unlock-pro`: null

Target version: `all`

Excluded by default: `no`

---

</details>

## `com.zhiliaoapp.musically`

<details>

`feed-filter`: Filters tiktok videos: removing ads, removing livestreams.

Target version: `all`

Excluded by default: `no`

---

`downloads`: Removes download restrictions and changes the default path to download to.

Target version: `30.8.4`

Excluded by default: `no`

---

`playback-speed`: Enables the playback speed option for all videos.

Target version: `all`

Excluded by default: `no`

---

`show-seekbar`: Shows progress bar for all video.

Target version: `all`

Excluded by default: `no`

---

`hide-ads`: null

Target version: `30.8.4`

Excluded by default: `no`

---

`sim-spoof`: Spoofs the information which is retrieved from the SIM card.

Target version: `all`

Excluded by default: `no`

---

`disable-login-requirement`: null

Target version: `all`

Excluded by default: `no`

---

`fix-google-login`: Allows logging in with a Google account.

Target version: `all`

Excluded by default: `no`

---

`settings`: Adds ReVanced settings to TikTok.

Target version: `30.8.4`

Excluded by default: `no`

---

</details>

## `com.zombodroid.MemeGenerator`

<details>

`unlock-pro`: null

Target version: `4.6364`, `4.6370`, `4.6375`, `4.6377`

Excluded by default: `no`

---

</details>

## `de.dwd.warnapp`

<details>

`promo-code-unlock`: Disables the validation of promo code. Any code will work to unlock all features.

Target version: `all`

Excluded by default: `no`

---

</details>

## `de.tudortmund.app`

<details>

`show-on-lockscreen`: Shows student id and student ticket on lockscreen.

Target version: `all`

Excluded by default: `no`

---

</details>

## `eu.faircode.netguard`

<details>

`remove-broadcasts-restriction`: Enables starting/stopping NetGuard via broadcasts.

Target version: `all`

Excluded by default: `no`

---

</details>

## `free.reddit.news`

<details>

`spoof-client`: Restores functionality of the app by using custom client ID's.

Target version: `all`

Excluded by default: `no`

<details>
<summary>Options</summary>

| Key | Description |
| :---: | :---: |
| `client-id` | The Reddit OAuth client ID. You can get your client ID from https |
</details>

---

</details>

## `ginlemon.iconpackstudio`

<details>

`unlock-pro`: null

Target version: `all`

Excluded by default: `no`

---

</details>

## `io.yuka.android`

<details>

`unlock-premium`: null

Target version: `all`

Excluded by default: `no`

---

</details>

## `jp.pxv.android`

<details>

`hide-ads`: null

Target version: `all`

Excluded by default: `no`

---

</details>

## `me.ccrama.redditslide`

<details>

`spoof-client`: Restores functionality of the app by using custom client ID's.

Target version: `all`

Excluded by default: `no`

<details>
<summary>Options</summary>

| Key | Description |
| :---: | :---: |
| `client-id` | The Reddit OAuth client ID. You can get your client ID from https |
</details>

---

</details>

## `ml.docilealligator.infinityforreddit`

<details>

`spoof-client`: Restores functionality of the app by using custom client ID's.

Target version: `5.4.0`, `5.4.1`, `5.4.2`, `6.0.1`, `6.0.2`, `6.0.4`, `6.0.6`, `6.1.1`

Excluded by default: `no`

<details>
<summary>Options</summary>

| Key | Description |
| :---: | :---: |
| `client-id` | The Reddit OAuth client ID. You can get your client ID from https |
</details>

---

</details>

## `net.binarymode.android.irplus`

<details>

`remove-ads`: null

Target version: `all`

Excluded by default: `no`

---

</details>

## `o.o.joey`

<details>

`disable-ads`: null

Target version: `all`

Excluded by default: `no`

---

`spoof-client`: Restores functionality of the app by using custom client ID's.

Target version: `all`

Excluded by default: `no`

<details>
<summary>Options</summary>

| Key | Description |
| :---: | :---: |
| `client-id` | The Reddit OAuth client ID. You can get your client ID from https |
</details>

---

</details>

## `o.o.joey.dev`

<details>

`spoof-client`: Restores functionality of the app by using custom client ID's.

Target version: `all`

Excluded by default: `no`

<details>
<summary>Options</summary>

| Key | Description |
| :---: | :---: |
| `client-id` | The Reddit OAuth client ID. You can get your client ID from https |
</details>

---

</details>

## `o.o.joey.pro`

<details>

`spoof-client`: Restores functionality of the app by using custom client ID's.

Target version: `all`

Excluded by default: `no`

<details>
<summary>Options</summary>

| Key | Description |
| :---: | :---: |
| `client-id` | The Reddit OAuth client ID. You can get your client ID from https |
</details>

---

</details>

## `org.totschnig.myexpenses`

<details>

`unlock-pro`: null

Target version: `3.4.9`

Excluded by default: `no`

---

</details>

## `pl.solidexplorer2`

<details>

`remove-file-size-limit`: Allows opening files larger than 2 MB in the text editor.

Target version: `all`

Excluded by default: `no`

---

</details>

## `reddit.news`

<details>

`spoof-client`: Restores functionality of the app by using custom client ID's.

Target version: `all`

Excluded by default: `no`

<details>
<summary>Options</summary>

| Key | Description |
| :---: | :---: |
| `client-id` | The Reddit OAuth client ID. You can get your client ID from https |
</details>

---

</details>

## `tv.trakt.trakt`

<details>

`unlock-pro`: null

Target version: `1.1.1`

Excluded by default: `no`

---

</details>

## `tv.twitch.android.app`

<details>

`auto-claim-channel-points`: Automatically claim Channel Points.

Target version: `15.4.1`, `16.1.0`

Excluded by default: `no`

---

`show-deleted-messages`: Shows deleted chat messages behind a clickable spoiler.

Target version: `15.4.1`, `16.1.0`

Excluded by default: `no`

---

`debug-mode`: Enables Twitch's internal debugging mode.

Target version: `all`

Excluded by default: `no`

---

`block-audio-ads`: Blocks audio ads in streams and VODs.

Target version: `15.4.1`, `16.1.0`

Excluded by default: `no`

---

`block-video-ads`: Blocks video ads in streams and VODs.

Target version: `15.4.1`, `16.1.0`

Excluded by default: `no`

---

`block-embedded-ads`: Blocks embedded stream ads using services like Luminous or PurpleAdBlocker.

Target version: `15.4.1`, `16.1.0`

Excluded by default: `no`

---

`settings`: Adds settings menu to Twitch.

Target version: `all`

Excluded by default: `no`

---

</details>

