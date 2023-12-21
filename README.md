# yt-revanced-icon
revanced-patches repacked with custom icons using Github Actions.
The custom icons are located in the `branding` directory.
## `all`

<details>

`Predictive back gesture`: Enables the predictive back gesture introduced on Android 13.

Target version: `all`

Included by default: `no`

---

`Spoof Wi-Fi connection`: Spoofs an existing Wi-Fi connection.

Target version: `all`

Included by default: `no`

---

`Spoof SIM country`: Spoofs country information returned by the SIM card provider.

Target version: `all`

Included by default: `no`

<details>
<summary>Options</summary>

| Key | Description |
| :---: | :---: |
| `networkCountryIso` | ISO-3166-1 alpha-2 country code equivalent of the MCC (Mobile Country Code) of the current registered operator or the cell nearby. |
| `simCountryIso` | ISO-3166-1 alpha-2 country code equivalent for the SIM provider's country code. |
</details>

---

`Override certificate pinning`: Overrides certificate pinning, allowing to inspect traffic via a proxy.

Target version: `all`

Included by default: `no`

---

`Enable Android debugging`: Enables Android debugging capabilities. This can slow down the app.

Target version: `all`

Included by default: `no`

---

`Change package name`: Appends ".revanced" to the package name by default.

Target version: `all`

Included by default: `no`

<details>
<summary>Options</summary>

| Key | Description |
| :---: | :---: |
| `packageName` | The name of the package to rename the app to. |
</details>

---

`Remove screenshot restriction`: Removes the restriction of taking screenshots in apps that normally wouldn't allow it.

Target version: `all`

Included by default: `no`

---

`Remove screen capture restriction`: Removes the restriction of capturing audio from apps that normally wouldn't allow it.

Target version: `all`

Included by default: `no`

---

`Export all activities`: Makes all app activities exportable.

Target version: `all`

Included by default: `no`

---

</details>

## `at.gv.bka.serviceportal`

<details>

`Remove root detection`: Removes the check for root permissions and unlocked bootloader.

Target version: `all`

Included by default: `yes`

---

</details>

## `at.gv.bmf.bmf2go`

<details>

`Remove root detection`: Removes the check for root permissions.

Target version: `all`

Included by default: `yes`

---

`Remove bootloader detection`: Removes the check for an unlocked bootloader.

Target version: `all`

Included by default: `yes`

---

</details>

## `at.gv.oe.app`

<details>

`Remove root detection`: Removes the check for root permissions and unlocked bootloader.

Target version: `3.0.2`

Included by default: `yes`

---

`Spoof signature`: Spoofs the signature of the app.

Target version: `3.0.2`

Included by default: `yes`

---

</details>

## `co.windyapp.android`

<details>

`Unlock pro`: Unlocks all pro features.

Target version: `all`

Included by default: `yes`

---

</details>

## `com.adobe.lrmobile`

<details>

`Unlock premium`: null

Target version: `all`

Included by default: `yes`

---

`Disable mandatory login`: null

Target version: `all`

Included by default: `yes`

---

</details>

## `com.andrewshu.android.reddit`

<details>

`Spoof client`: Restores functionality of the app by using custom client ID.

Target version: `all`

Included by default: `yes`

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

`Spoof client`: Restores functionality of the app by using custom client ID.

Target version: `all`

Included by default: `yes`

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

`Unlock pro`: null

Target version: `2.2.7`

Included by default: `yes`

---

</details>

## `com.backdrops.wallpapers`

<details>

`Pro unlock`: null

Target version: `4.52`

Included by default: `yes`

---

</details>

## `com.candylink.openvpn`

<details>

`Unlock pro`: null

Target version: `all`

Included by default: `yes`

---

</details>

## `com.facebook.katana`

<details>

`Hide story ads`: Hides the ads in the Facebook app stories.

Target version: `all`

Included by default: `yes`

---

</details>

## `com.facebook.orca`

<details>

`Hide inbox ads`: Hides ads in inbox.

Target version: `all`

Included by default: `yes`

---

`Disable switching emoji to sticker`: Disables switching from emoji to sticker search mode in message input field.

Target version: `all`

Included by default: `yes`

---

`Disable typing indicator`: Disables the indicator while typing a message.

Target version: `all`

Included by default: `yes`

---

</details>

## `com.google.android.apps.recorder`

<details>

`Remove device restrictions`: Removes restrictions from using the app on any device. Requires mounting patched app over original.

Target version: `all`

Included by default: `yes`

---

</details>

## `com.google.android.apps.youtube.music`

<details>

`Minimized playback music`: Enables minimized playback on Kids music.

Target version: `all`

Included by default: `yes`

---

`Hide get premium`: Removes all "Get Premium" evidences from the avatar menu.

Target version: `all`

Included by default: `yes`

---

`Compact header`: Hides the music category bar at the top of the homepage.

Target version: `all`

Included by default: `no`

---

`Remove upgrade button`: Removes the upgrade tab from the pivot bar.

Target version: `all`

Included by default: `yes`

---

`Permanent shuffle`: Permanently remember your shuffle preference even if the playlist ends or another track is played.

Target version: `all`

Included by default: `no`

---

`Permanent repeat`: Permanently remember your repeating preference even if the playlist ends or another track is played.

Target version: `all`

Included by default: `no`

---

`Background play`: Enables playing music in the background.

Target version: `all`

Included by default: `yes`

---

`Exclusive audio playback`: Enables the option to play audio without video.

Target version: `all`

Included by default: `yes`

---

`Codecs unlock`: Adds more audio codec options. The new audio codecs usually result in better audio quality.

Target version: `all`

Included by default: `yes`

---

`Music video ads`: Removes ads in the music player.

Target version: `all`

Included by default: `yes`

---

`Bypass certificate checks`: Bypasses certificate checks which prevent YouTube Music from working on Android Auto.

Target version: `all`

Included by default: `yes`

---

`GmsCore support`: Allows Google apps to run without root and under a different package name by using GmsCore instead of Google Play Services.

Target version: `all`

Included by default: `yes`

<details>
<summary>Options</summary>

| Key | Description |
| :---: | :---: |
| `gmsCoreVendor` | The group id of the GmsCore vendor. |
</details>

---

</details>

## `com.google.android.youtube`

<details>

`Theme`: Applies a custom theme.

Target version: `18.37.36`, `18.38.44`, `18.43.45`, `18.44.41`, `18.45.41`, `18.45.43`

Included by default: `yes`

<details>
<summary>Options</summary>

| Key | Description |
| :---: | :---: |
| `darkThemeBackgroundColor` | Can be a hex color (#AARRGGBB) or a color resource reference. |
| `lightThemeBackgroundColor` | Can be a hex color (#AARRGGBB) or a color resource reference. |
</details>

---

`Disable player popup panels`: Disables panels (such as live chat) from opening automatically.

Target version: `18.32.39`, `18.37.36`, `18.38.44`, `18.43.45`, `18.44.41`, `18.45.41`, `18.45.43`

Included by default: `yes`

---

`Disable resuming Shorts on startup`: Disables resuming the Shorts player on app startup if a Short was last opened.

Target version: `18.32.39`, `18.37.36`, `18.38.44`, `18.43.45`, `18.44.41`, `18.45.41`, `18.45.43`

Included by default: `yes`

---

`Tablet mini player`: Enables the tablet mini player layout.

Target version: `18.32.39`, `18.37.36`, `18.38.44`, `18.43.45`, `18.44.41`, `18.45.41`, `18.45.43`

Included by default: `yes`

---

`Hide autoplay button`: Hides the autoplay button in the video player.

Target version: `18.32.39`, `18.37.36`, `18.38.44`, `18.43.45`, `18.44.41`, `18.45.41`, `18.45.43`

Included by default: `yes`

---

`Hide captions button`: Hides the captions button in the video player.

Target version: `18.32.39`, `18.37.36`, `18.38.44`, `18.43.45`, `18.44.41`, `18.45.41`, `18.45.43`

Included by default: `yes`

---

`Hide video action buttons`: Adds options to hide action buttons under a video.

Target version: `18.32.39`, `18.37.36`, `18.38.44`, `18.43.45`, `18.44.41`, `18.45.41`, `18.45.43`

Included by default: `yes`

---

`Navigation buttons`: Adds options to hide or change navigation buttons.

Target version: `18.32.39`, `18.37.36`, `18.38.44`, `18.43.45`, `18.44.41`, `18.45.41`, `18.45.43`

Included by default: `yes`

---

`Hide player buttons`: Hides previous and next buttons in the video player.

Target version: `18.32.39`, `18.37.36`, `18.38.44`, `18.43.45`, `18.44.41`, `18.45.41`, `18.45.43`

Included by default: `yes`

---

`Hide cast button`: Hides the cast button in the video player.

Target version: `all`

Included by default: `yes`

---

`Spoof app version`: Tricks YouTube into thinking you are running an older version of the app. This can be used to restore old UI elements and features.

Target version: `18.32.39`, `18.37.36`, `18.38.44`, `18.43.45`, `18.44.41`, `18.45.41`, `18.45.43`

Included by default: `yes`

---

`Disable auto captions`: Disable forced captions from being automatically enabled.

Target version: `18.32.39`, `18.37.36`, `18.38.44`, `18.43.45`, `18.44.41`, `18.45.41`, `18.45.43`

Included by default: `yes`

---

`Custom branding`: Changes the app name and icon to your choice (defaults to "YouTube ReVanced" and the ReVanced logo).

Target version: `all`

Included by default: `no`

<details>
<summary>Options</summary>

| Key | Description |
| :---: | :---: |
| `appName` | The name of the app. |
| `iconPath` | The path to a folder containing the following folders |
</details>

---

`Premium heading`: Show or hide the premium heading.

Target version: `all`

Included by default: `yes`

<details>
<summary>Options</summary>

| Key | Description |
| :---: | :---: |
| `usePremiumHeading` | Whether to use the premium heading. |
</details>

---

`Alternative thumbnails`: Adds options to replace video thumbnails with still image captures of the video.

Target version: `18.32.39`, `18.37.36`, `18.38.44`, `18.43.45`, `18.44.41`, `18.45.41`, `18.45.43`

Included by default: `yes`

---

`Enable tablet layout`: Spoofs the device form factor to a tablet which enables the tablet layout.

Target version: `all`

Included by default: `yes`

---

`Return YouTube Dislike`: Shows the dislike count of videos using the Return YouTube Dislike API.

Target version: `18.43.45`, `18.44.41`, `18.45.41`, `18.45.43`

Included by default: `yes`

---

`Change start page`: Changes the start page of the app.

Target version: `all`

Included by default: `yes`

---

`Custom player overlay opacity`: Change the opacity of the player background when player controls are visible.

Target version: `all`

Included by default: `yes`

---

`Remove player controls background`: Removes the background from the video player controls.

Target version: `18.32.39`, `18.37.36`, `18.38.44`, `18.43.45`, `18.44.41`, `18.45.41`, `18.45.43`

Included by default: `no`

---

`Comments`: Hides components related to comments.

Target version: `18.32.39`, `18.37.36`, `18.38.44`, `18.43.45`, `18.44.41`, `18.45.41`, `18.45.43`

Included by default: `yes`

---

`Hide info cards`: Hides info cards in videos.

Target version: `18.32.39`, `18.37.36`, `18.38.44`, `18.43.45`, `18.44.41`, `18.45.41`, `18.45.43`

Included by default: `yes`

---

`Hide floating microphone button`: Hides the floating microphone button which appears in search.

Target version: `18.32.39`, `18.37.36`, `18.38.44`, `18.43.45`, `18.44.41`, `18.45.41`, `18.45.43`

Included by default: `yes`

---

`Hide album cards`: Hides the album cards below the artist description.

Target version: `18.32.39`, `18.37.36`, `18.38.44`, `18.43.45`, `18.44.41`, `18.45.41`, `18.45.43`

Included by default: `yes`

---

`Hide crowdfunding box`: Hides the crowdfunding box between the player and video description.

Target version: `18.32.39`, `18.37.36`, `18.38.44`, `18.43.45`, `18.44.41`, `18.45.41`, `18.45.43`

Included by default: `yes`

---

`Hide email address`: Hides the email address in the account switcher.

Target version: `18.32.39`, `18.37.36`, `18.38.44`, `18.43.45`, `18.44.41`, `18.45.41`, `18.45.43`

Included by default: `yes`

---

`Player flyout menu`: Hides player flyout menu items.

Target version: `18.32.39`, `18.37.36`, `18.38.44`, `18.43.45`, `18.44.41`, `18.45.41`, `18.45.43`

Included by default: `yes`

---

`Hide breaking news shelf`: Hides the breaking news shelf on the homepage tab.

Target version: `18.32.39`, `18.37.36`, `18.38.44`, `18.43.45`, `18.44.41`, `18.45.41`, `18.45.43`

Included by default: `yes`

---

`Hide endscreen cards`: Hides the suggested video cards at the end of videos.

Target version: `18.32.39`, `18.37.36`, `18.38.44`, `18.43.45`, `18.44.41`, `18.45.41`, `18.45.43`

Included by default: `yes`

---

`Disable fullscreen ambient mode`: Disables the ambient mode when in fullscreen.

Target version: `18.37.36`, `18.38.44`, `18.43.45`, `18.44.41`, `18.45.41`, `18.45.43`

Included by default: `yes`

---

`Hide layout components`: Hides general layout components.

Target version: `18.32.39`, `18.37.36`, `18.38.44`, `18.43.45`, `18.44.41`, `18.45.41`, `18.45.43`

Included by default: `yes`

---

`Hide Shorts components`: Hides components from YouTube Shorts.

Target version: `18.32.39`, `18.37.36`, `18.38.44`, `18.43.45`, `18.44.41`, `18.45.41`, `18.45.43`

Included by default: `yes`

---

`Hide filter bar`: Hides the filter bar in video feeds.

Target version: `18.32.39`, `18.37.36`, `18.38.44`, `18.43.45`, `18.44.41`, `18.45.41`, `18.45.43`

Included by default: `yes`

---

`Hide 'Load more' button`: Hides the button under videos that loads similar videos.

Target version: `18.32.39`, `18.37.36`, `18.38.44`, `18.43.45`, `18.44.41`, `18.45.41`, `18.45.43`

Included by default: `yes`

---

`Disable rolling number animations`: Disables rolling number animations of video view count, user likes, and upload time.

Target version: `18.43.45`, `18.44.41`, `18.45.41`, `18.45.43`

Included by default: `yes`

---

`Hide seekbar`: Hides the seekbar.

Target version: `18.32.39`, `18.37.36`, `18.38.44`, `18.43.45`, `18.44.41`, `18.45.41`, `18.45.43`

Included by default: `yes`

---

`Hide timestamp`: Hides timestamp in video player.

Target version: `18.32.39`, `18.37.36`, `18.38.44`, `18.43.45`, `18.44.41`, `18.45.41`, `18.45.43`

Included by default: `yes`

---

`Disable suggested video end screen`: Disables the suggested video end screen at the end of a video.

Target version: `18.37.36`, `18.38.44`, `18.43.45`, `18.44.41`, `18.45.41`, `18.45.43`

Included by default: `yes`

---

`Wide searchbar`: Replaces the search icon with a wide search bar. This will hide the YouTube logo when active.

Target version: `18.32.39`, `18.37.36`, `18.38.44`, `18.43.45`, `18.45.41`, `18.45.43`

Included by default: `yes`

---

`Restore old seekbar thumbnails`: Restores the old seekbar thumbnails that appear above the seekbar instead of fullscreen thumbnails.

Target version: `18.37.36`, `18.38.44`, `18.43.45`, `18.44.41`, `18.45.41`, `18.45.43`

Included by default: `yes`

---

`SponsorBlock`: Integrates SponsorBlock, which can skip undesired video segments such as sponsored content.

Target version: `18.32.39`, `18.37.36`, `18.38.44`, `18.43.45`, `18.44.41`, `18.45.41`, `18.45.43`

Included by default: `yes`

---

`External downloads`: Adds support to download and save YouTube videos using an external app.

Target version: `18.32.39`, `18.37.36`, `18.38.44`, `18.43.45`, `18.44.41`, `18.45.41`, `18.45.43`

Included by default: `yes`

---

`Swipe controls`: Adds volume and brightness swipe controls.

Target version: `18.32.39`, `18.37.36`, `18.38.44`, `18.43.45`, `18.44.41`, `18.45.41`, `18.45.43`

Included by default: `yes`

---

`Copy video url`: Adds buttons in player to copy video links.

Target version: `18.32.39`, `18.37.36`, `18.38.44`, `18.43.45`, `18.44.41`, `18.45.41`, `18.45.43`

Included by default: `yes`

---

`Seekbar tapping`: Enables tap-to-seek on the seekbar of the video player.

Target version: `18.43.45`, `18.44.41`, `18.45.41`, `18.45.43`

Included by default: `yes`

---

`Disable precise seeking gesture`: Disables the gesture that is used to seek precisely when swiping up on the seekbar.

Target version: `18.32.39`, `18.37.36`, `18.38.44`, `18.43.45`, `18.44.41`, `18.45.41`, `18.45.43`

Included by default: `yes`

---

`Enable slide to seek`: Enable slide to seek instead of playing at 2x speed when pressing and holding in the video player.

Target version: `18.43.45`, `18.44.41`, `18.45.41`, `18.45.43`

Included by default: `yes`

---

`Remember video quality`: Adds the ability to remember the last video quality selected.

Target version: `18.32.39`, `18.37.36`, `18.38.44`, `18.43.45`, `18.44.41`, `18.45.41`, `18.45.43`

Included by default: `yes`

---

`HDR auto brightness`: Makes the brightness of HDR videos follow the system default.

Target version: `18.32.39`, `18.37.36`, `18.38.44`, `18.43.45`, `18.44.41`, `18.45.41`, `18.45.43`

Included by default: `yes`

---

`Restore old video quality menu`: Restores the old video quality with advanced video quality options.

Target version: `18.32.39`, `18.37.36`, `18.38.44`, `18.43.45`, `18.44.41`, `18.45.41`, `18.45.43`

Included by default: `yes`

---

`Playback speed`: Adds custom playback speeds and ability to remember the last playback speed selected.

Target version: `18.32.39`, `18.37.36`, `18.38.44`, `18.43.45`, `18.44.41`, `18.45.41`, `18.45.43`

Included by default: `yes`

---

`Video ads`: Removes ads in the video player.

Target version: `18.32.39`, `18.37.36`, `18.38.44`, `18.43.45`, `18.44.41`, `18.45.41`, `18.45.43`

Included by default: `yes`

---

`Hide ads`: Removes general ads.

Target version: `18.32.39`, `18.37.36`, `18.38.44`, `18.43.45`, `18.44.41`, `18.45.41`, `18.45.43`

Included by default: `yes`

---

`Minimized playback`: Enables minimized and background playback.

Target version: `18.32.39`, `18.37.36`, `18.38.44`, `18.43.45`, `18.44.41`, `18.45.41`, `18.45.43`

Included by default: `yes`

---

`Enable debugging`: Adds debugging options.

Target version: `all`

Included by default: `yes`

---

`Open links externally`: Open links outside of the app directly in your browser.

Target version: `18.32.39`, `18.37.36`, `18.38.44`, `18.43.45`, `18.44.41`, `18.45.41`, `18.45.43`

Included by default: `yes`

---

`Bypass URL redirects`: Bypass URL redirects and open the original URL directly.

Target version: `18.43.45`, `18.44.41`, `18.45.41`, `18.45.43`

Included by default: `yes`

---

`Always autorepeat`: Always repeats the playing video again.

Target version: `18.32.39`, `18.37.36`, `18.38.44`, `18.43.45`, `18.44.41`, `18.45.41`, `18.45.43`

Included by default: `yes`

---

`Remove tracking query parameter`: Remove the tracking query parameter from links you share.

Target version: `18.43.45`, `18.44.41`, `18.45.41`, `18.45.43`

Included by default: `yes`

---

`Client spoof`: Spoofs the client to allow playback.

Target version: `18.32.39`, `18.37.36`, `18.38.44`, `18.43.45`, `18.44.41`, `18.45.41`, `18.45.43`

Included by default: `yes`

---

`GmsCore support`: Allows Google apps to run without root and under a different package name by using GmsCore instead of Google Play Services.

Target version: `18.32.39`, `18.37.36`, `18.38.44`, `18.43.45`, `18.44.41`, `18.45.41`, `18.45.43`

Included by default: `yes`

<details>
<summary>Options</summary>

| Key | Description |
| :---: | :---: |
| `gmsCoreVendor` | The group id of the GmsCore vendor. |
</details>

---

`Spoof device dimensions`: Spoofs the device dimensions in order to unlock higher video qualities that may not be available on your device.

Target version: `18.38.44`, `18.43.45`, `18.44.41`, `18.45.41`, `18.45.43`

Included by default: `yes`

---

`Announcements`: Shows ReVanced announcements on startup.

Target version: `all`

Included by default: `yes`

---

`Disable zoom haptics`: Disables haptics when zooming.

Target version: `all`

Included by default: `yes`

---

</details>

## `com.instagram.android`

<details>

`Hide timeline ads`: Removes ads from the timeline.

Target version: `275.0.0.27.98`

Included by default: `yes`

---

</details>

## `com.ithebk.expensemanager`

<details>

`Unlock pro`: null

Target version: `all`

Included by default: `yes`

---

</details>

## `com.laurencedawson.reddit_sync`

<details>

`Disable ads`: null

Target version: `all`

Included by default: `yes`

---

`Spoof client`: Restores functionality of the app by using custom client ID.

Target version: `all`

Included by default: `yes`

<details>
<summary>Options</summary>

| Key | Description |
| :---: | :---: |
| `client-id` | The Reddit OAuth client ID. You can get your client ID from https |
</details>

---

`Disable Sync for Lemmy bottom sheet`: Disables the bottom sheet at the startup that asks you to signup to "Sync for Lemmy".

Target version: `v23.06.30-13:39`

Included by default: `yes`

---

</details>

## `com.laurencedawson.reddit_sync.dev`

<details>

`Spoof client`: Restores functionality of the app by using custom client ID.

Target version: `all`

Included by default: `yes`

<details>
<summary>Options</summary>

| Key | Description |
| :---: | :---: |
| `client-id` | The Reddit OAuth client ID. You can get your client ID from https |
</details>

---

`Disable Sync for Lemmy bottom sheet`: Disables the bottom sheet at the startup that asks you to signup to "Sync for Lemmy".

Target version: `all`

Included by default: `yes`

---

</details>

## `com.laurencedawson.reddit_sync.pro`

<details>

`Spoof client`: Restores functionality of the app by using custom client ID.

Target version: `all`

Included by default: `yes`

<details>
<summary>Options</summary>

| Key | Description |
| :---: | :---: |
| `client-id` | The Reddit OAuth client ID. You can get your client ID from https |
</details>

---

`Disable Sync for Lemmy bottom sheet`: Disables the bottom sheet at the startup that asks you to signup to "Sync for Lemmy".

Target version: `all`

Included by default: `yes`

---

</details>

## `com.microblink.photomath`

<details>

`Unlock plus`: null

Target version: `8.32.0`

Included by default: `yes`

---

`Spoof device ID`: Spoofs device ID to mitigate manual bans by developers.

Target version: `8.32.0`

Included by default: `yes`

---

</details>

## `com.myprog.hexedit`

<details>

`Disable ads`: null

Target version: `all`

Included by default: `yes`

---

</details>

## `com.nis.app`

<details>

`Hide ads`: null

Target version: `all`

Included by default: `yes`

---

</details>

## `com.onelouder.baconreader`

<details>

`Spoof client`: Restores functionality of the app by using custom client ID.

Target version: `all`

Included by default: `yes`

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

`Spoof client`: Restores functionality of the app by using custom client ID.

Target version: `all`

Included by default: `yes`

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

`Unlock premium Reddit icons`: null

Target version: `all`

Included by default: `yes`

---

`Disable screenshot popup`: Disables the popup that shows up when taking a screenshot.

Target version: `all`

Included by default: `yes`

---

`Hide ads`: null

Target version: `all`

Included by default: `yes`

---

`Sanitize sharing links`: Removes (tracking) query parameters from the URLs when sharing links.

Target version: `all`

Included by default: `yes`

---

</details>

## `com.rubenmayayo.reddit`

<details>

`Spoof client`: Restores functionality of the app by using custom client ID.

Target version: `all`

Included by default: `yes`

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

`Remove debugging detection`: Removes the USB and wireless debugging checks.

Target version: `all`

Included by default: `no`

---

</details>

## `com.sony.songpal.mdr`

<details>

`Remove notification badge`: Removes the red notification badge from the activity tab.

Target version: `10.1.0`

Included by default: `yes`

---

`Remove badge tab`: Removes the badge tab from the activity tab.

Target version: `all`

Included by default: `yes`

---

</details>

## `com.spotify.lite`

<details>

`Enable on demand`: Enables listening to songs on-demand, allowing to play any song from playlists, albums or artists without limitations. This does not remove ads.

Target version: `all`

Included by default: `yes`

---

</details>

## `com.spotify.music`

<details>

`Custom theme`: Applies a custom theme.

Target version: `all`

Included by default: `yes`

<details>
<summary>Options</summary>

| Key | Description |
| :---: | :---: |
| `backgroundColor` | The background color. Can be a hex color or a resource reference. |
| `backgroundColorSecondary` | The secondary background color. (e.g. search box |
| `artist & podcast). Can be a hex color or a resource reference.` | undefined |
| `accentColor` | The accent color ('Spotify green' by default). Can be a hex color or a resource reference. |
| `accentColorPressed` | The color when accented buttons are pressed |
| `by default slightly darker than accent. Can be a hex color or a resource reference.` | undefined |
</details>

---

`Hide premium navbar`: Removes the premium tab from the navbar.

Target version: `all`

Included by default: `yes`

---

</details>

## `com.ss.android.ugc.trill`

<details>

`Downloads`: Removes download restrictions and changes the default path to download to.

Target version: `32.5.3`

Included by default: `yes`

---

`Playback speed`: Enables the playback speed option for all videos.

Target version: `32.5.3`

Included by default: `yes`

---

`Show seekbar`: Shows progress bar for all video.

Target version: `all`

Included by default: `yes`

---

`SIM spoof`: Spoofs the information which is retrieved from the SIM card.

Target version: `all`

Included by default: `no`

---

`Fix Google login`: Allows logging in with a Google account.

Target version: `all`

Included by default: `yes`

---

`Disable login requirement`: null

Target version: `all`

Included by default: `yes`

---

`Settings`: Adds ReVanced settings to TikTok.

Target version: `32.5.3`

Included by default: `yes`

---

`Feed filter`: Removes ads, livestreams, stories, image videos and videos with a specific amount of views or likes from the feed.

Target version: `32.5.3`

Included by default: `yes`

---

</details>

## `com.strava`

<details>

`Disable subscription suggestions`: null

Target version: `320.12`

Included by default: `yes`

---

`Unlock subscription features`: Unlocks "Routes", "Matched Runs" and "Segment Efforts".

Target version: `320.12`

Included by default: `yes`

---

</details>

## `com.ticktick.task`

<details>

`Unlock themes`: Unlocks all themes that are inaccessible until a certain level is reached.

Target version: `all`

Included by default: `yes`

---

</details>

## `com.tumblr`

<details>

`Disable Tumblr Live`: Disable the Tumblr Live tab button and dashboard carousel.

Target version: `all`

Included by default: `yes`

---

`Disable dashboard ads`: Disables ads in the dashboard.

Target version: `all`

Included by default: `yes`

---

`Disable gift message popup`: Disables the popup suggesting to buy TumblrMart items for other people.

Target version: `all`

Included by default: `yes`

---

`Disable in-app update`: Disables the in-app update check and update prompt.

Target version: `all`

Included by default: `yes`

---

`Disable blog notification reminder`: Disables the reminder to enable notifications for blogs you visit.

Target version: `all`

Included by default: `yes`

---

</details>

## `com.twitter.android`

<details>

`Hide ads`: Hides ads.

Target version: `all`

Included by default: `yes`

---

`Hide recommended users`: null

Target version: `all`

Included by default: `yes`

---

`Dynamic color`: Replaces the default X (Formerly Twitter) Blue with the user's Material You palette.

Target version: `all`

Included by default: `yes`

---

</details>

## `com.vanced.android.youtube`

<details>

`Hide ads`: Removes general ads.

Target version: `all`

Included by default: `yes`

---

</details>

## `com.vsco.cam`

<details>

`Unlock pro`: Unlocks pro features.

Target version: `all`

Included by default: `yes`

---

</details>

## `com.wakdev.apps.nfctools.se`

<details>

`Unlock pro`: null

Target version: `all`

Included by default: `yes`

---

</details>

## `com.zhiliaoapp.musically`

<details>

`Downloads`: Removes download restrictions and changes the default path to download to.

Target version: `32.5.3`

Included by default: `yes`

---

`Playback speed`: Enables the playback speed option for all videos.

Target version: `32.5.3`

Included by default: `yes`

---

`Show seekbar`: Shows progress bar for all video.

Target version: `all`

Included by default: `yes`

---

`SIM spoof`: Spoofs the information which is retrieved from the SIM card.

Target version: `all`

Included by default: `no`

---

`Fix Google login`: Allows logging in with a Google account.

Target version: `all`

Included by default: `yes`

---

`Disable login requirement`: null

Target version: `all`

Included by default: `yes`

---

`Settings`: Adds ReVanced settings to TikTok.

Target version: `32.5.3`

Included by default: `yes`

---

`Feed filter`: Removes ads, livestreams, stories, image videos and videos with a specific amount of views or likes from the feed.

Target version: `32.5.3`

Included by default: `yes`

---

</details>

## `com.zombodroid.MemeGenerator`

<details>

`Unlock pro`: null

Target version: `4.6364`, `4.6370`, `4.6375`, `4.6377`

Included by default: `yes`

---

</details>

## `de.dwd.warnapp`

<details>

`Promo code unlock`: Disables the validation of promo code. Any code will work to unlock all features.

Target version: `all`

Included by default: `yes`

---

</details>

## `de.tudortmund.app`

<details>

`Show on lockscreen`: Shows student id and student ticket on lockscreen.

Target version: `all`

Included by default: `yes`

---

</details>

## `eu.faircode.netguard`

<details>

`Remove broadcasts restriction`: Enables starting/stopping NetGuard via broadcasts.

Target version: `all`

Included by default: `no`

---

</details>

## `free.reddit.news`

<details>

`Spoof client`: Restores functionality of the app by using custom client ID.

Target version: `all`

Included by default: `yes`

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

`Unlock pro`: null

Target version: `2.2 build 016`

Included by default: `yes`

---

</details>

## `io.yuka.android`

<details>

`Unlock premium`: null

Target version: `4.29`

Included by default: `yes`

---

</details>

## `it.ipzs.cieid`

<details>

`Bypass root checks`: Removes the restriction to use the app with root permissions or on a custom ROM.

Target version: `all`

Included by default: `yes`

---

</details>

## `jp.pxv.android`

<details>

`Hide ads`: null

Target version: `all`

Included by default: `yes`

---

</details>

## `me.ccrama.redditslide`

<details>

`Spoof client`: Restores functionality of the app by using custom client ID.

Target version: `all`

Included by default: `yes`

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

`Spoof client`: Restores functionality of the app by using custom client ID.

Target version: `all`

Included by default: `yes`

<details>
<summary>Options</summary>

| Key | Description |
| :---: | :---: |
| `client-id` | The Reddit OAuth client ID. You can get your client ID from https |
</details>

---

`Unlock subscription`: Unlocks the subscription feature but requires a custom client ID.

Target version: `all`

Included by default: `yes`

---

</details>

## `net.binarymode.android.irplus`

<details>

`Remove ads`: null

Target version: `all`

Included by default: `yes`

---

</details>

## `o.o.joey`

<details>

`Disable ads`: null

Target version: `all`

Included by default: `yes`

---

`Spoof client`: Restores functionality of the app by using custom client ID.

Target version: `all`

Included by default: `yes`

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

`Spoof client`: Restores functionality of the app by using custom client ID.

Target version: `all`

Included by default: `yes`

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

`Spoof client`: Restores functionality of the app by using custom client ID.

Target version: `all`

Included by default: `yes`

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

`Unlock pro`: null

Target version: `3.4.9`

Included by default: `yes`

---

</details>

## `pl.solidexplorer2`

<details>

`Remove file size limit`: Allows opening files larger than 2 MB in the text editor.

Target version: `all`

Included by default: `yes`

---

</details>

## `reddit.news`

<details>

`Spoof client`: Restores functionality of the app by using custom client ID.

Target version: `all`

Included by default: `yes`

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

`Unlock pro`: null

Target version: `1.1.1`

Included by default: `yes`

---

</details>

## `tv.twitch.android.app`

<details>

`Debug mode`: Enables Twitch's internal debugging mode.

Target version: `all`

Included by default: `no`

---

`Block embedded ads`: Blocks embedded stream ads using services like Luminous or PurpleAdBlocker.

Target version: `15.4.1`, `16.1.0`, `16.9.1`

Included by default: `yes`

---

`Block video ads`: Blocks video ads in streams and VODs.

Target version: `15.4.1`, `16.1.0`, `16.9.1`

Included by default: `yes`

---

`Block audio ads`: Blocks audio ads in streams and VODs.

Target version: `15.4.1`, `16.1.0`, `16.9.1`

Included by default: `yes`

---

`Settings`: Adds settings menu to Twitch.

Target version: `15.4.1`, `16.1.0`, `16.9.1`

Included by default: `yes`

---

`Show deleted messages`: Shows deleted chat messages behind a clickable spoiler.

Target version: `15.4.1`, `16.1.0`, `16.9.1`

Included by default: `yes`

---

`Auto claim channel points`: Automatically claim Channel Points.

Target version: `15.4.1`, `16.1.0`, `16.9.1`

Included by default: `yes`

---

</details>

