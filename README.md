# yt-revanced-icon
revanced-patches repacked with custom icons using Github Actions.
The custom icons are located in the `branding` directory.
## `all`

<details>

`Spoof Wi-Fi connection`: Spoofs an existing Wi-Fi connection.

Target version: `all`

Included by default: `no`

---

`Remove screenshot restriction`: Removes the restriction of taking screenshots in apps that normally wouldn't allow it.

Target version: `all`

Included by default: `no`

---

`Export all activities`: Makes all app activities exportable.

Target version: `all`

Included by default: `no`

---

`Change package name`: Appends ".revanced" to the package name by default. Changing the package name of the app can lead to unexpected issues.

Target version: `all`

Included by default: `no`

<details>
<summary>Options</summary>

| Key | Description |
| :---: | :---: |
| `packageName` | The name of the package to rename the app to. |
</details>

---

`Change version code`: Changes the version code of the app. By default the highest version code is set. This allows older versions of an app to be installed if their version code is set to the same or a higher value and can stop app stores to update the app.

Target version: `all`

Included by default: `no`

<details>
<summary>Options</summary>

| Key | Description |
| :---: | :---: |
| `versionCode` | The version code to use |
</details>

---

`Enable Android debugging`: Enables Android debugging capabilities. This can slow down the app.

Target version: `all`

Included by default: `no`

---

`Hex`: Replaces a hexadecimal patterns of bytes of files in an APK.

Target version: `all`

Included by default: `no`

<details>
<summary>Options</summary>

| Key | Description |
| :---: | :---: |
| `replacements` | Hexadecimal patterns to search for and replace with another in a target file.

A pattern is a sequence of case insensitive strings |
| `each representing hexadecimal bytes` | undefined |
| `separated by spaces.
An example pattern is 'aa 01 02 FF'.

Every pattern must be followed by a pipe ('|')` | undefined |
| `the replacement pattern,
another pipe ('|')` | undefined |
| `and the path to the file to make the changes in relative to the APK root. 
The replacement pattern must have the same length as the original pattern.

Full example of a valid input` | 
'aa 01 02 FF|00 00 00 00|path/to/file' |
</details>

---

`Override certificate pinning`: Overrides certificate pinning, allowing to inspect traffic via a proxy.

Target version: `all`

Included by default: `no`

---

`Remove share targets`: Removes share targets like directly sharing to a frequent contact.

Target version: `all`

Included by default: `no`

---

`Remove screen capture restriction`: Removes the restriction of capturing audio from apps that normally wouldn't allow it.

Target version: `all`

Included by default: `no`

---

`Predictive back gesture`: Enables the predictive back gesture introduced on Android 13.

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
| `networkCountryIso` | ISO-3166-1 alpha-2 country code equivalent for the SIM provider's country code. |
| `simCountryIso` | ISO-3166-1 alpha-2 country code equivalent for the SIM provider's country code. |
</details>

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

Target version: `all`

Included by default: `yes`

---

`Spoof signature`: Spoofs the signature of the app.

Target version: `all`

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

## `com.amazon.mShop.android.shopping`

<details>

`Always allow deep-linking`: Open Amazon links, even if the app is not set to handle Amazon links.

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

## `com.bandcamp.android`

<details>

`Remove play limits`: Disables purchase nagging and playback limits of not purchased tracks.

Target version: `all`

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

`Hide inbox subtabs`: Hides Home and Channels tabs between active now tray and chats.

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

`Hide music video ads`: null

Target version: `6.45.54`, `6.51.53`, `7.01.53`, `7.02.52`, `7.03.52`

Included by default: `yes`

---

`GmsCore support`: Allows patched Google apps to run without root and under a different package name by using GmsCore instead of Google Play Services.

Target version: `6.45.54`, `6.51.53`, `7.01.53`, `7.02.52`, `7.03.52`

Included by default: `yes`

<details>
<summary>Options</summary>

| Key | Description |
| :---: | :---: |
| `gmsCoreVendorGroupId` | The vendor's group ID for GmsCore. |
</details>

---

`Bypass certificate checks`: Bypasses certificate checks which prevent YouTube Music from working on Android Auto.

Target version: `6.45.54`, `6.51.53`, `7.01.53`, `7.02.52`, `7.03.52`

Included by default: `yes`

---

`Remove background playback restrictions`: Removes restrictions on background playback, including playing kids videos in the background.

Target version: `6.45.54`, `6.51.53`, `7.01.53`, `7.02.52`, `7.03.52`

Included by default: `yes`

---

`Enable exclusive audio playback`: Enables the option to play audio without video.

Target version: `6.45.54`, `6.51.53`, `7.01.53`, `7.02.52`, `7.03.52`

Included by default: `yes`

---

`Hide 'Get Music Premium' label`: Hides the "Get Music Premium" label from the account menu and settings.

Target version: `6.45.54`, `6.51.53`, `7.01.53`, `7.02.52`, `7.03.52`

Included by default: `yes`

---

`Hide category bar`: Hides the category bar at the top of the homepage.

Target version: `6.45.54`, `6.51.53`, `7.01.53`, `7.02.52`, `7.03.52`

Included by default: `no`

---

`Remove upgrade button`: Removes the upgrade tab from the pivot bar.

Target version: `6.45.54`, `6.51.53`, `7.01.53`, `7.02.52`, `7.03.52`

Included by default: `yes`

---

`Permanent shuffle`: Permanently remember your shuffle preference even if the playlist ends or another track is played.

Target version: `6.45.54`, `6.51.53`, `7.01.53`, `7.02.52`, `7.03.52`

Included by default: `no`

---

`Permanent repeat`: Permanently remember your repeating preference even if the playlist ends or another track is played.

Target version: `6.45.54`, `6.51.53`, `7.01.53`, `7.02.52`, `7.03.52`

Included by default: `no`

---

</details>

## `com.google.android.youtube`

<details>

`Hide ads`: Adds options to remove general ads.

Target version: `18.32.39`, `18.37.36`, `18.38.44`, `18.43.45`, `18.44.41`, `18.45.43`, `18.48.39`, `18.49.37`, `19.01.34`, `19.02.39`, `19.03.36`, `19.04.38`, `19.05.36`, `19.06.39`, `19.07.40`, `19.08.36`, `19.09.38`, `19.10.39`, `19.11.43`, `19.12.41`, `19.13.37`, `19.14.43`, `19.15.36`, `19.16.39`

Included by default: `yes`

---

`Video ads`: Adds an option to remove ads in the video player.

Target version: `18.32.39`, `18.37.36`, `18.38.44`, `18.43.45`, `18.44.41`, `18.45.43`, `18.48.39`, `18.49.37`, `19.01.34`, `19.02.39`, `19.03.36`, `19.04.38`, `19.05.36`, `19.06.39`, `19.07.40`, `19.08.36`, `19.09.38`, `19.10.39`, `19.11.43`, `19.12.41`, `19.13.37`, `19.14.43`, `19.15.36`, `19.16.39`

Included by default: `yes`

---

`GmsCore support`: Allows patched Google apps to run without root and under a different package name by using GmsCore instead of Google Play Services.

Target version: `18.37.36`, `18.38.44`, `18.43.45`, `18.44.41`, `18.45.43`, `18.48.39`, `18.49.37`, `19.01.34`, `19.02.39`, `19.03.36`, `19.04.38`, `19.05.36`, `19.06.39`, `19.07.40`, `19.08.36`, `19.09.38`, `19.10.39`, `19.11.43`, `19.12.41`, `19.13.37`, `19.14.43`, `19.15.36`, `19.16.39`

Included by default: `yes`

<details>
<summary>Options</summary>

| Key | Description |
| :---: | :---: |
| `gmsCoreVendorGroupId` | The vendor's group ID for GmsCore. |
</details>

---

`Remove tracking query parameter`: Adds an option to remove the tracking info from links you share.

Target version: `18.43.45`, `18.44.41`, `18.45.43`, `18.48.39`, `18.49.37`, `19.01.34`, `19.02.39`, `19.03.36`, `19.04.38`, `19.05.36`, `19.06.39`, `19.07.40`, `19.08.36`, `19.09.38`, `19.10.39`, `19.11.43`, `19.12.41`, `19.13.37`, `19.14.43`, `19.15.36`, `19.16.39`

Included by default: `yes`

---

`Announcements`: Adds an option to show announcements from ReVanced on app startup.

Target version: `all`

Included by default: `yes`

---

`Spoof client`: Spoofs the client to allow video playback.

Target version: `18.37.36`, `18.38.44`, `18.43.45`, `18.44.41`, `18.45.43`, `18.48.39`, `18.49.37`, `19.01.34`, `19.02.39`, `19.03.36`, `19.04.38`, `19.05.36`, `19.06.39`, `19.07.40`, `19.08.36`, `19.09.38`, `19.10.39`, `19.11.43`, `19.12.41`, `19.13.37`, `19.14.43`, `19.15.36`, `19.16.39`

Included by default: `yes`

---

`Enable debugging`: Adds options for debugging.

Target version: `all`

Included by default: `yes`

---

`Remove background playback restrictions`: Removes restrictions on background playback, including playing kids videos in the background.

Target version: `18.48.39`, `18.49.37`, `19.01.34`, `19.02.39`, `19.03.36`, `19.04.38`, `19.05.36`, `19.06.39`, `19.07.40`, `19.08.36`, `19.09.38`, `19.10.39`, `19.11.43`, `19.12.41`, `19.13.37`, `19.14.43`, `19.15.36`, `19.16.39`

Included by default: `yes`

---

`Disable zoom haptics`: Adds an option to disable haptics when zooming.

Target version: `all`

Included by default: `yes`

---

`Spoof device dimensions`: Adds an option to spoof the device dimensions which can unlock higher video qualities.

Target version: `18.38.44`, `18.43.45`, `18.44.41`, `18.45.43`, `18.48.39`, `18.49.37`, `19.01.34`, `19.02.39`, `19.03.36`, `19.04.38`, `19.05.36`, `19.06.39`, `19.07.40`, `19.08.36`, `19.09.38`, `19.10.39`, `19.11.43`, `19.12.41`, `19.13.37`, `19.14.43`, `19.15.36`, `19.16.39`

Included by default: `yes`

---

`Bypass URL redirects`: Adds an option to bypass URL redirects and open the original URL directly.

Target version: `18.43.45`, `18.44.41`, `18.45.43`, `18.48.39`, `18.49.37`, `19.01.34`, `19.02.39`, `19.03.36`, `19.04.38`, `19.05.36`, `19.06.39`, `19.07.40`, `19.08.36`, `19.09.38`, `19.10.39`, `19.11.43`, `19.12.41`, `19.13.37`, `19.14.43`, `19.15.36`, `19.16.39`

Included by default: `yes`

---

`Open links externally`: Adds an option to always open links in your browser instead of in the in-app-browser.

Target version: `18.32.39`, `18.37.36`, `18.38.44`, `18.43.45`, `18.44.41`, `18.45.43`, `18.48.39`, `18.49.37`, `19.01.34`, `19.02.39`, `19.03.36`, `19.04.38`, `19.05.36`, `19.06.39`, `19.07.40`, `19.08.36`, `19.09.38`, `19.10.39`, `19.11.43`, `19.12.41`, `19.13.37`, `19.14.43`, `19.15.36`, `19.16.39`

Included by default: `yes`

---

`Always repeat`: Adds an option to always repeat videos when they end.

Target version: `18.32.39`, `18.37.36`, `18.38.44`, `18.43.45`, `18.44.41`, `18.45.43`, `18.48.39`, `18.49.37`, `19.01.34`, `19.02.39`, `19.03.36`, `19.04.38`, `19.05.36`, `19.06.39`, `19.07.40`, `19.08.36`, `19.09.38`, `19.10.39`, `19.11.43`, `19.12.41`, `19.13.37`, `19.14.43`, `19.15.36`, `19.16.39`

Included by default: `yes`

---

`Alternative thumbnails`: Adds options to replace video thumbnails using the DeArrow API or image captures from the video.

Target version: `18.32.39`, `18.37.36`, `18.38.44`, `18.43.45`, `18.44.41`, `18.45.43`, `18.48.39`, `18.49.37`, `19.01.34`, `19.02.39`, `19.03.36`, `19.04.38`, `19.05.36`, `19.06.39`, `19.07.40`, `19.08.36`, `19.09.38`, `19.10.39`, `19.11.43`, `19.12.41`, `19.13.37`, `19.14.43`, `19.15.36`, `19.16.39`

Included by default: `yes`

---

`Hide captions button`: Adds an option to hide the captions button in the video player.

Target version: `18.32.39`, `18.37.36`, `18.38.44`, `18.43.45`, `18.44.41`, `18.45.43`, `18.48.39`, `18.49.37`, `19.01.34`, `19.02.39`, `19.03.36`, `19.04.38`, `19.05.36`, `19.06.39`, `19.07.40`, `19.08.36`, `19.09.38`, `19.10.39`, `19.11.43`, `19.12.41`, `19.13.37`, `19.14.43`, `19.15.36`, `19.16.39`

Included by default: `yes`

---

`Hide video action buttons`: Adds options to hide action buttons (such as the Download button) under videos.

Target version: `18.32.39`, `18.37.36`, `18.38.44`, `18.43.45`, `18.44.41`, `18.45.43`, `18.48.39`, `18.49.37`, `19.01.34`, `19.02.39`, `19.03.36`, `19.04.38`, `19.05.36`, `19.06.39`, `19.07.40`, `19.08.36`, `19.09.38`, `19.10.39`, `19.11.43`, `19.12.41`, `19.13.37`, `19.14.43`, `19.15.36`, `19.16.39`

Included by default: `yes`

---

`Hide cast button`: Adds an option to hide the cast button in the video player.

Target version: `all`

Included by default: `yes`

---

`Hide player buttons`: Adds an option to hide the previous and next buttons in the video player.

Target version: `18.32.39`, `18.37.36`, `18.38.44`, `18.43.45`, `18.44.41`, `18.45.43`, `18.48.39`, `18.49.37`, `19.01.34`, `19.02.39`, `19.03.36`, `19.04.38`, `19.05.36`, `19.06.39`, `19.07.40`, `19.08.36`, `19.09.38`, `19.10.39`, `19.11.43`, `19.12.41`, `19.13.37`, `19.14.43`, `19.15.36`, `19.16.39`

Included by default: `yes`

---

`Navigation buttons`: Adds options to hide and change navigation buttons (such as the Shorts button).

Target version: `18.32.39`, `18.37.36`, `18.38.44`, `18.43.45`, `18.44.41`, `18.45.43`, `18.48.39`, `18.49.37`, `19.01.34`, `19.02.39`, `19.03.36`, `19.04.38`, `19.05.36`, `19.06.39`, `19.07.40`, `19.08.36`, `19.09.38`, `19.10.39`, `19.11.43`, `19.12.41`, `19.13.37`, `19.14.43`, `19.15.36`, `19.16.39`

Included by default: `yes`

---

`Hide autoplay button`: Adds an option to hide the autoplay button in the video player.

Target version: `18.32.39`, `18.37.36`, `18.38.44`, `18.43.45`, `18.44.41`, `18.45.43`, `18.48.39`, `18.49.37`, `19.01.34`, `19.02.39`, `19.03.36`, `19.04.38`, `19.05.36`, `19.06.39`, `19.07.40`, `19.08.36`, `19.09.38`, `19.10.39`, `19.11.43`, `19.12.41`, `19.13.37`, `19.14.43`, `19.15.36`, `19.16.39`

Included by default: `yes`

---

`Return YouTube Dislike`: Adds an option to show the dislike count of videos using the Return YouTube Dislike API.

Target version: `18.49.37`, `19.01.34`, `19.02.39`, `19.03.36`, `19.04.38`, `19.05.36`, `19.06.39`, `19.07.40`, `19.08.36`, `19.09.38`, `19.10.39`, `19.11.43`, `19.12.41`, `19.13.37`, `19.14.43`, `19.15.36`, `19.16.39`

Included by default: `yes`

---

`Change start page`: Adds an option to set which page the app opens in instead of the homepage.

Target version: `all`

Included by default: `yes`

---

`Remove player controls background`: Removes the dark background surrounding the video player controls.

Target version: `18.32.39`, `18.37.36`, `18.38.44`, `18.43.45`, `18.44.41`, `18.45.43`, `18.48.39`, `18.49.37`, `19.01.34`, `19.02.39`, `19.03.36`, `19.04.38`, `19.05.36`, `19.06.39`, `19.07.40`, `19.08.36`, `19.09.38`, `19.10.39`, `19.11.43`, `19.12.41`, `19.13.37`, `19.14.43`, `19.15.36`, `19.16.39`

Included by default: `no`

---

`Custom player overlay opacity`: Adds an option to change the opacity of the video player background when player controls are visible.

Target version: `all`

Included by default: `yes`

---

`Disable player popup panels`: Adds an option to disable panels (such as live chat) from opening automatically.

Target version: `18.32.39`, `18.37.36`, `18.38.44`, `18.43.45`, `18.44.41`, `18.45.43`, `18.48.39`, `18.49.37`, `19.01.34`, `19.02.39`, `19.03.36`, `19.04.38`, `19.05.36`, `19.06.39`, `19.07.40`, `19.08.36`, `19.09.38`, `19.10.39`, `19.11.43`, `19.12.41`, `19.13.37`, `19.14.43`, `19.15.36`, `19.16.39`

Included by default: `yes`

---

`Change header`: Applies a custom header in the top left corner within the app. Defaults to the ReVanced header.

Target version: `all`

Included by default: `no`

<details>
<summary>Options</summary>

| Key | Description |
| :---: | :---: |
| `header` | The header to apply to the app.

If a path to a folder is provided |
| `the folder must contain one or more of the following folders` | undefined |
| `depending on the DPI of the device` | 

- drawable-xxxhdpi
- drawable-xxhdpi
- drawable-xhdpi
- drawable-hdpi
- drawable-mdpi

Each of the folders must contain all of the following files |
</details>

---

`Custom branding`: Applies a custom app name and icon. Defaults to "YouTube ReVanced" and the ReVanced logo.

Target version: `all`

Included by default: `no`

<details>
<summary>Options</summary>

| Key | Description |
| :---: | :---: |
| `appName` | The name of the app. |
| `iconPath` | The icon to apply to the app.

If a path to a folder is provided |
| `the folder must contain the following folders` | 

- mipmap-xxxhdpi
- mipmap-xxhdpi
- mipmap-xhdpi
- mipmap-hdpi
- mipmap-mdpi

Each of these folders must contain the following files |
</details>

---

`Restore old seekbar thumbnails`: Adds an option to restore the old seekbar thumbnails that appear above the seekbar while seeking instead of fullscreen thumbnails.

Target version: `18.37.36`, `18.38.44`, `18.43.45`, `18.44.41`, `18.45.43`, `18.48.39`, `18.49.37`, `19.01.34`, `19.02.39`, `19.03.36`, `19.04.38`, `19.05.36`, `19.06.39`, `19.07.40`, `19.08.36`, `19.09.38`, `19.10.39`, `19.11.43`, `19.12.41`, `19.13.37`, `19.14.43`, `19.15.36`, `19.16.39`

Included by default: `yes`

---

`Spoof app version`: Adds an option to trick YouTube into thinking you are running an older version of the app. This can be used to restore old UI elements and features.

Target version: `18.32.39`, `18.37.36`, `18.38.44`, `18.43.45`, `18.44.41`, `18.45.43`, `18.48.39`, `18.49.37`, `19.01.34`, `19.02.39`, `19.03.36`, `19.04.38`, `19.05.36`, `19.06.39`, `19.07.40`, `19.08.36`, `19.09.38`, `19.10.39`, `19.11.43`, `19.12.41`, `19.13.37`, `19.14.43`, `19.15.36`, `19.16.39`

Included by default: `yes`

---

`Disable resuming Shorts on startup`: Adds an option to disable the Shorts player from resuming on app startup when Shorts were last being watched.

Target version: `18.32.39`, `18.37.36`, `18.38.44`, `18.43.45`, `18.44.41`, `18.45.43`, `18.48.39`, `18.49.37`, `19.01.34`, `19.02.39`, `19.03.36`, `19.04.38`, `19.05.36`, `19.06.39`, `19.07.40`, `19.08.36`, `19.09.38`, `19.10.39`, `19.11.43`, `19.12.41`, `19.13.37`, `19.14.43`, `19.15.36`, `19.16.39`

Included by default: `yes`

---

`Disable auto captions`: Adds an option to disable captions from being automatically enabled.

Target version: `18.32.39`, `18.37.36`, `18.38.44`, `18.43.45`, `18.44.41`, `18.45.43`, `18.48.39`, `18.49.37`, `19.01.34`, `19.02.39`, `19.03.36`, `19.04.38`, `19.05.36`, `19.06.39`, `19.07.40`, `19.08.36`, `19.09.38`, `19.10.39`, `19.11.43`, `19.12.41`, `19.13.37`, `19.14.43`, `19.15.36`, `19.16.39`

Included by default: `yes`

---

`Miniplayer`: Adds options to change the in app minimized player, and if patching target 19.16+ adds options to use modern miniplayers.

Target version: `18.32.39`, `18.37.36`, `18.38.44`, `18.43.45`, `18.44.41`, `18.45.43`, `18.48.39`, `18.49.37`, `19.01.34`, `19.02.39`, `19.03.36`, `19.04.38`, `19.05.36`, `19.06.39`, `19.07.40`, `19.08.36`, `19.09.38`, `19.10.39`, `19.11.43`, `19.12.41`, `19.13.37`, `19.16.39`

Included by default: `yes`

---

`Enable tablet layout`: Adds an option to enable tablet layout

Target version: `18.32.39`, `18.37.36`, `18.38.44`, `18.43.45`, `18.44.41`, `18.45.43`, `18.48.39`, `18.49.37`, `19.01.34`, `19.02.39`, `19.03.36`, `19.04.38`, `19.05.36`, `19.06.39`, `19.07.40`, `19.08.36`, `19.09.38`, `19.10.39`, `19.11.43`, `19.12.41`, `19.13.37`, `19.14.43`, `19.15.36`, `19.16.39`

Included by default: `yes`

---

`Theme`: Adds options for theming and applies a custom background theme (dark background theme defaults to amoled black).

Target version: `18.37.36`, `18.38.44`, `18.43.45`, `18.44.41`, `18.45.43`, `18.48.39`, `18.49.37`, `19.01.34`, `19.02.39`, `19.03.36`, `19.04.38`, `19.05.36`, `19.06.39`, `19.07.40`, `19.08.36`, `19.09.38`, `19.10.39`, `19.11.43`, `19.12.41`, `19.13.37`, `19.14.43`, `19.15.36`, `19.16.39`

Included by default: `yes`

<details>
<summary>Options</summary>

| Key | Description |
| :---: | :---: |
| `darkThemeBackgroundColor` | Can be a hex color (#AARRGGBB) or a color resource reference. |
| `lightThemeBackgroundColor` | Can be a hex color (#AARRGGBB) or a color resource reference. |
</details>

---

`SponsorBlock`: Adds options to enable and configure SponsorBlock, which can skip undesired video segments such as sponsored content.

Target version: `18.48.39`, `18.49.37`, `19.01.34`, `19.02.39`, `19.03.36`, `19.04.38`, `19.05.36`, `19.06.39`, `19.07.40`, `19.08.36`, `19.09.38`, `19.10.39`, `19.11.43`, `19.12.41`, `19.13.37`, `19.14.43`, `19.15.36`, `19.16.39`

Included by default: `yes`

---

`Hide info cards`: Adds an option to hide info cards that creators add in the video player.

Target version: `18.32.39`, `18.37.36`, `18.38.44`, `18.43.45`, `18.44.41`, `18.45.43`, `18.48.39`, `18.49.37`, `19.01.34`, `19.02.39`, `19.03.36`, `19.04.38`, `19.05.36`, `19.06.39`, `19.07.40`, `19.08.36`, `19.09.38`, `19.10.39`, `19.11.43`, `19.12.41`, `19.13.37`, `19.14.43`, `19.15.36`, `19.16.39`

Included by default: `yes`

---

`Disable rolling number animations`: Adds an option to disable rolling number animations of video view count, user likes, and upload time.

Target version: `18.43.45`, `18.44.41`, `18.45.43`, `18.48.39`, `18.49.37`, `19.01.34`, `19.02.39`, `19.03.36`, `19.04.38`, `19.05.36`, `19.06.39`, `19.07.40`, `19.08.36`, `19.09.38`, `19.10.39`, `19.11.43`, `19.12.41`, `19.13.37`, `19.14.43`, `19.15.36`, `19.16.39`

Included by default: `yes`

---

`Hide timestamp`: Adds an option to hide the timestamp in the bottom left of the video player.

Target version: `18.37.36`, `18.38.44`, `18.43.45`, `18.44.41`, `18.45.43`, `18.48.39`, `18.49.37`, `19.01.34`, `19.02.39`, `19.03.36`, `19.04.38`, `19.05.36`, `19.06.39`, `19.07.40`, `19.08.36`, `19.09.38`, `19.10.39`, `19.11.43`, `19.12.41`, `19.13.37`, `19.14.43`, `19.15.36`, `19.16.39`

Included by default: `yes`

---

`Hide Shorts components`: Adds options to hide components related to YouTube Shorts.

Target version: `18.32.39`, `18.37.36`, `18.38.44`, `18.43.45`, `18.44.41`, `18.45.43`, `18.48.39`, `18.49.37`, `19.01.34`, `19.02.39`, `19.03.36`, `19.04.38`, `19.05.36`, `19.06.39`, `19.07.40`, `19.08.36`, `19.09.38`, `19.10.39`, `19.11.43`, `19.12.41`, `19.13.37`, `19.14.43`, `19.15.36`, `19.16.39`

Included by default: `yes`

---

`Comments`: Adds options to hide components related to comments.

Target version: `18.32.39`, `18.37.36`, `18.38.44`, `18.43.45`, `18.44.41`, `18.45.43`, `18.48.39`, `18.49.37`, `19.01.34`, `19.02.39`, `19.03.36`, `19.04.38`, `19.05.36`, `19.06.39`, `19.07.40`, `19.08.36`, `19.09.38`, `19.10.39`, `19.11.43`, `19.12.41`, `19.13.37`, `19.14.43`, `19.15.36`, `19.16.39`

Included by default: `yes`

---

`Hide album cards`: Adds an option to hide album cards below artist descriptions.

Target version: `18.32.39`, `18.37.36`, `18.38.44`, `18.43.45`, `18.44.41`, `18.45.43`, `18.48.39`, `18.49.37`, `19.01.34`, `19.02.39`, `19.03.36`, `19.04.38`, `19.05.36`, `19.06.39`, `19.07.40`, `19.08.36`, `19.09.38`, `19.10.39`, `19.11.43`, `19.12.41`, `19.13.37`, `19.14.43`, `19.15.36`, `19.16.39`

Included by default: `yes`

---

`Player flyout menu`: Adds options to hide menu items that appear when pressing the gear icon in the video player.

Target version: `18.32.39`, `18.37.36`, `18.38.44`, `18.43.45`, `18.44.41`, `18.45.43`, `18.48.39`, `18.49.37`, `19.01.34`, `19.02.39`, `19.03.36`, `19.04.38`, `19.05.36`, `19.06.39`, `19.07.40`, `19.08.36`, `19.09.38`, `19.10.39`, `19.11.43`, `19.12.41`, `19.13.37`, `19.14.43`, `19.15.36`, `19.16.39`

Included by default: `yes`

---

`Disable suggested video end screen`: Adds an option to disable the suggested video end screen at the end of videos.

Target version: `18.37.36`, `18.38.44`, `18.43.45`, `18.44.41`, `18.45.43`, `18.48.39`, `18.49.37`, `19.01.34`, `19.02.39`, `19.03.36`, `19.04.38`, `19.05.36`, `19.06.39`, `19.07.40`, `19.08.36`, `19.09.38`, `19.10.39`, `19.11.43`, `19.12.41`, `19.13.37`, `19.14.43`, `19.15.36`, `19.16.39`

Included by default: `yes`

---

`Hide seekbar`: Adds an option to hide the seekbar.

Target version: `18.32.39`, `18.37.36`, `18.38.44`, `18.43.45`, `18.44.41`, `18.45.43`, `18.48.39`, `18.49.37`, `19.01.34`, `19.02.39`, `19.03.36`, `19.04.38`, `19.05.36`, `19.06.39`, `19.07.40`, `19.08.36`, `19.09.38`, `19.10.39`, `19.11.43`, `19.12.41`, `19.13.37`, `19.14.43`, `19.15.36`, `19.16.39`

Included by default: `yes`

---

`Hide floating microphone button`: Adds an option to hide the floating microphone button when searching.

Target version: `18.32.39`, `18.37.36`, `18.38.44`, `18.43.45`, `18.44.41`, `18.45.43`, `18.48.39`, `18.49.37`, `19.01.34`, `19.02.39`, `19.03.36`, `19.04.38`, `19.05.36`, `19.06.39`, `19.07.40`, `19.08.36`, `19.09.38`, `19.10.39`, `19.11.43`, `19.12.41`, `19.13.37`, `19.14.43`, `19.15.36`, `19.16.39`

Included by default: `yes`

---

`Disable fullscreen ambient mode`: Adds an option to disable the ambient mode when in fullscreen.

Target version: `18.37.36`, `18.38.44`, `18.43.45`, `18.44.41`, `18.45.43`, `18.48.39`, `18.49.37`, `19.01.34`, `19.02.39`, `19.03.36`, `19.04.38`, `19.05.36`, `19.06.39`, `19.07.40`, `19.08.36`, `19.09.38`, `19.10.39`, `19.11.43`, `19.12.41`, `19.13.37`, `19.14.43`, `19.15.36`, `19.16.39`

Included by default: `yes`

---

`Hide layout components`: Adds options to hide general layout components.

Target version: `18.32.39`, `18.37.36`, `18.38.44`, `18.43.45`, `18.44.41`, `18.45.43`, `18.48.39`, `18.49.37`, `19.01.34`, `19.02.39`, `19.03.36`, `19.04.38`, `19.05.36`, `19.06.39`, `19.07.40`, `19.08.36`, `19.09.38`, `19.10.39`, `19.11.43`, `19.12.41`, `19.13.37`, `19.14.43`, `19.15.36`, `19.16.39`

Included by default: `yes`

---

`Hide filter bar`: Adds options to hide the category bar at the top of video feeds.

Target version: `18.32.39`, `18.37.36`, `18.38.44`, `18.43.45`, `18.44.41`, `18.45.43`, `18.48.39`, `18.49.37`, `19.01.34`, `19.02.39`, `19.03.36`, `19.04.38`, `19.05.36`, `19.06.39`, `19.07.40`, `19.08.36`, `19.09.38`, `19.10.39`, `19.11.43`, `19.12.41`, `19.13.37`, `19.14.43`, `19.15.36`, `19.16.39`

Included by default: `yes`

---

`Hide crowdfunding box`: Adds an option to hide the crowdfunding box between the player and video description.

Target version: `18.32.39`, `18.37.36`, `18.38.44`, `18.43.45`, `18.44.41`, `18.45.43`, `18.48.39`, `18.49.37`, `19.01.34`, `19.02.39`, `19.03.36`, `19.04.38`, `19.05.36`, `19.06.39`, `19.07.40`, `19.08.36`, `19.09.38`, `19.10.39`, `19.11.43`, `19.12.41`, `19.13.37`, `19.14.43`, `19.15.36`, `19.16.39`

Included by default: `yes`

---

`Hide endscreen cards`: Adds an option to hide suggested video cards at the end of videos.

Target version: `18.32.39`, `18.37.36`, `18.38.44`, `18.43.45`, `18.44.41`, `18.45.43`, `18.48.39`, `18.49.37`, `19.01.34`, `19.02.39`, `19.03.36`, `19.04.38`, `19.05.36`, `19.06.39`, `19.07.40`, `19.08.36`, `19.09.38`, `19.10.39`, `19.11.43`, `19.12.41`, `19.13.37`, `19.14.43`, `19.15.36`, `19.16.39`

Included by default: `yes`

---

`Wide searchbar`: Adds an option to replace the search icon with a wide search bar. This will hide the YouTube logo when active.

Target version: `18.32.39`, `18.37.36`, `18.38.44`, `18.43.45`, `18.45.43`, `18.48.39`, `18.49.37`, `19.01.34`, `19.02.39`, `19.03.36`, `19.04.38`, `19.05.36`, `19.06.39`, `19.07.40`, `19.08.36`, `19.09.38`, `19.10.39`, `19.11.43`, `19.12.41`, `19.13.37`, `19.14.43`, `19.15.36`, `19.16.39`

Included by default: `yes`

---

`Remember video quality`: Adds an option to remember the last video quality selected.

Target version: `18.48.39`, `18.49.37`, `19.01.34`, `19.02.39`, `19.03.36`, `19.04.38`, `19.05.36`, `19.06.39`, `19.07.40`, `19.08.36`, `19.09.38`, `19.10.39`, `19.11.43`, `19.12.41`, `19.13.37`, `19.14.43`, `19.15.36`, `19.16.39`

Included by default: `yes`

---

`Playback speed`: Adds options to customize available playback speeds, remember the last playback speed selected and show a speed dialog button to the video player.

Target version: `18.48.39`, `18.49.37`, `19.01.34`, `19.02.39`, `19.03.36`, `19.04.38`, `19.05.36`, `19.06.39`, `19.07.40`, `19.08.36`, `19.09.38`, `19.10.39`, `19.11.43`, `19.12.41`, `19.13.37`, `19.14.43`, `19.15.36`, `19.16.39`

Included by default: `yes`

---

`Restore old video quality menu`: Adds an option to restore the old video quality menu with specific video resolution options.

Target version: `18.32.39`, `18.37.36`, `18.38.44`, `18.43.45`, `18.44.41`, `18.45.43`, `18.48.39`, `18.49.37`, `19.01.34`, `19.02.39`, `19.03.36`, `19.04.38`, `19.05.36`, `19.06.39`, `19.07.40`, `19.08.36`, `19.09.38`, `19.10.39`, `19.11.43`, `19.12.41`, `19.13.37`, `19.14.43`, `19.15.36`, `19.16.39`

Included by default: `yes`

---

`Downloads`: Adds support to download videos with an external downloader app using the in-app download button or a video player action button.

Target version: `18.48.39`, `18.49.37`, `19.01.34`, `19.02.39`, `19.03.36`, `19.04.38`, `19.05.36`, `19.06.39`, `19.07.40`, `19.08.36`, `19.09.38`, `19.10.39`, `19.11.43`, `19.12.41`, `19.13.37`, `19.14.43`, `19.15.36`, `19.16.39`

Included by default: `yes`

---

`Swipe controls`: Adds options to enable and configure volume and brightness swipe controls.

Target version: `18.32.39`, `18.37.36`, `18.38.44`, `18.43.45`, `18.44.41`, `18.45.43`, `18.48.39`, `18.49.37`, `19.01.34`, `19.02.39`, `19.03.36`, `19.04.38`, `19.05.36`, `19.06.39`, `19.07.40`, `19.08.36`, `19.09.38`, `19.10.39`, `19.11.43`, `19.12.41`, `19.13.37`, `19.14.43`, `19.15.36`, `19.16.39`

Included by default: `yes`

---

`Seekbar tapping`: Adds an option to enable tap-to-seek on the seekbar of the video player.

Target version: `18.43.45`, `18.44.41`, `18.45.43`, `18.48.39`, `18.49.37`, `19.01.34`, `19.02.39`, `19.03.36`, `19.04.38`, `19.05.36`, `19.06.39`, `19.07.40`, `19.08.36`, `19.09.38`, `19.10.39`, `19.11.43`, `19.12.41`, `19.13.37`, `19.14.43`, `19.15.36`, `19.16.39`

Included by default: `yes`

---

`Enable slide to seek`: Adds an option to enable slide to seek instead of playing at 2x speed when pressing and holding in the video player. Including this patch may cause issues with tapping or double tapping the video player overlay.

Target version: `18.43.45`, `18.44.41`, `18.45.43`, `18.48.39`, `18.49.37`, `19.01.34`, `19.02.39`, `19.03.36`, `19.04.38`, `19.05.36`, `19.06.39`, `19.07.40`, `19.08.36`, `19.09.38`, `19.10.39`, `19.11.43`, `19.12.41`, `19.13.37`, `19.14.43`, `19.15.36`, `19.16.39`

Included by default: `no`

---

`Disable precise seeking gesture`: Adds an option to disable precise seeking when swiping up on the seekbar.

Target version: `18.32.39`, `18.37.36`, `18.38.44`, `18.43.45`, `18.44.41`, `18.45.43`, `18.48.39`, `18.49.37`, `19.01.34`, `19.02.39`, `19.03.36`, `19.04.38`, `19.05.36`, `19.06.39`, `19.07.40`, `19.08.36`, `19.09.38`, `19.10.39`, `19.11.43`, `19.12.41`, `19.13.37`, `19.14.43`, `19.15.36`, `19.16.39`

Included by default: `yes`

---

`Remove viewer discretion dialog`: Adds an option to remove the dialog that appears when opening a video that has been age-restricted by accepting it automatically. This does not bypass the age restriction.

Target version: `18.32.39`, `18.37.36`, `18.38.44`, `18.43.45`, `18.44.41`, `18.45.43`, `18.48.39`, `18.49.37`, `19.01.34`, `19.02.39`, `19.03.36`, `19.04.38`, `19.05.36`, `19.06.39`, `19.07.40`, `19.08.36`, `19.09.38`, `19.10.39`, `19.11.43`, `19.12.41`, `19.13.37`, `19.14.43`, `19.15.36`, `19.16.39`

Included by default: `yes`

---

`Copy video URL`: Adds options to display buttons in the video player to copy video URLs.

Target version: `18.48.39`, `18.49.37`, `19.01.34`, `19.02.39`, `19.03.36`, `19.04.38`, `19.05.36`, `19.06.39`, `19.07.40`, `19.08.36`, `19.09.38`, `19.10.39`, `19.11.43`, `19.12.41`, `19.13.37`, `19.14.43`, `19.15.36`, `19.16.39`

Included by default: `yes`

---

</details>

## `com.instagram.android`

<details>

`Hide ads`: Hides ads in stories, discover, profile, etc.An ad can still appear once when refreshing the home feed.

Target version: `all`

Included by default: `yes`

---

`Hide timeline ads`: null

Target version: `all`

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

`Fix /s/ links`: null

Target version: `all`

Included by default: `yes`

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

`Fix /s/ links`: null

Target version: `all`

Included by default: `yes`

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

`Fix /s/ links`: null

Target version: `all`

Included by default: `yes`

---

`Disable Sync for Lemmy bottom sheet`: Disables the bottom sheet at the startup that asks you to signup to "Sync for Lemmy".

Target version: `all`

Included by default: `yes`

---

</details>

## `com.microblink.photomath`

<details>

`Unlock plus`: null

Target version: `8.37.0`

Included by default: `yes`

---

`Hide update popup`: Prevents the update popup from showing up.

Target version: `8.37.0`

Included by default: `yes`

---

`Spoof device ID`: Spoofs device ID to mitigate manual bans by developers.

Target version: `8.37.0`

Included by default: `yes`

---

</details>

## `com.myfitnesspal.android`

<details>

`Hide ads`: Hides most of the ads across the app.

Target version: `all`

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

## `com.piccomaeurope.fr`

<details>

`Spoof Android device ID`: Spoofs the Android device ID used by the app for account authentication.This can be used to copy the account to another device.

Target version: `6.4.0`, `6.4.1`, `6.4.2`, `6.4.3`, `6.4.4`, `6.4.5`, `6.5.0`, `6.5.1`, `6.5.2`, `6.5.3`, `6.5.4`, `6.6.0`, `6.6.1`, `6.6.2`

Included by default: `no`

<details>
<summary>Options</summary>

| Key | Description |
| :---: | :---: |
| `android-device-id` | The Android device ID to spoof to. |
</details>

---

`Disable tracking`: Disables tracking by replacing tracking URLs with example.com.

Target version: `6.4.0`, `6.4.1`, `6.4.2`, `6.4.3`, `6.4.4`, `6.4.5`, `6.5.0`, `6.5.1`, `6.5.2`, `6.5.3`, `6.5.4`, `6.6.0`, `6.6.1`, `6.6.2`

Included by default: `yes`

---

</details>

## `com.rarlab.rar`

<details>

`Hide purchase reminder`: Hides the popup that reminds you to purchase the app.

Target version: `all`

Included by default: `yes`

---

</details>

## `com.reddit.frontpage`

<details>

`Hide ads`: null

Target version: `2024.17.0`

Included by default: `yes`

---

`Sanitize sharing links`: Removes (tracking) query parameters from the URLs when sharing links.

Target version: `all`

Included by default: `yes`

---

`Unlock premium Reddit icons`: null

Target version: `all`

Included by default: `yes`

---

`Disable screenshot popup`: Disables the popup that shows up when taking a screenshot.

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

`Fix missing audio in video downloads`: Fixes audio missing in videos downloaded from v.redd.it.

Target version: `all`

Included by default: `yes`

---

`Fix /s/ links`: null

Target version: `all`

Included by default: `yes`

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

## `com.soundcloud.android`

<details>

`Hide ads`: null

Target version: `all`

Included by default: `yes`

---

`Disable telemetry`: Disables SoundCloud's telemetry system.

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

`Hide premium navbar`: Removes the premium tab from the navbar.

Target version: `all`

Included by default: `yes`

---

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

</details>

## `com.ss.android.ugc.trill`

<details>

`Fix Google login`: Allows logging in with a Google account.

Target version: `all`

Included by default: `yes`

---

`Disable login requirement`: null

Target version: `all`

Included by default: `yes`

---

`SIM spoof`: Spoofs the information which is retrieved from the SIM card.

Target version: `all`

Included by default: `no`

---

`Settings`: Adds ReVanced settings to TikTok.

Target version: `32.5.3`

Included by default: `yes`

---

`Remember clear display`: Remembers the clear display configurations in between videos.

Target version: `32.5.3`

Included by default: `yes`

---

`Downloads`: Removes download restrictions and changes the default path to download to.

Target version: `32.5.3`

Included by default: `yes`

---

`Playback speed`: Enables the playback speed option for all videos and retains the speed configurations in between videos.

Target version: `32.5.3`

Included by default: `yes`

---

`Show seekbar`: Shows progress bar for all video.

Target version: `all`

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

Target version: `all`

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

`Fix old versions`: Fixes old versions of the app (v33.2 and earlier) breaking due to Tumblr removing remnants of Tumblr Live from the API, which causes many requests to fail. This patch has no effect on newer versions of the app.

Target version: `all`

Included by default: `no`

---

`Disable dashboard ads`: Disables ads in the dashboard.

Target version: `all`

Included by default: `yes`

---

`Disable blog notification reminder`: Disables the reminder to enable notifications for blogs you visit.

Target version: `all`

Included by default: `yes`

---

`Disable in-app update`: Disables the in-app update check and update prompt.

Target version: `all`

Included by default: `yes`

---

`Disable gift message popup`: Disables the popup suggesting to buy TumblrMart items for other people.

Target version: `all`

Included by default: `yes`

---

`Disable Ad-Free Banner`: Disables the banner with a frog, prompting you to buy Tumblr Ad-Free.

Target version: `all`

Included by default: `yes`

---

</details>

## `com.twitter.android`

<details>

`Dynamic color`: Replaces the default X (Formerly Twitter) Blue with the user's Material You palette.

Target version: `all`

Included by default: `yes`

---

`Hide recommended users`: null

Target version: `all`

Included by default: `yes`

---

`Hide ads`: null

Target version: `all`

Included by default: `yes`

---

`Sanitize sharing links`: Removes the tracking query parameters from links before they are shared.

Target version: `all`

Included by default: `yes`

---

`Open links with app chooser`: Instead of opening links directly, open them with an app chooser. As a result you can select a browser to open the link with.

Target version: `all`

Included by default: `no`

---

`Hide view count`: Hides the view count of Posts.

Target version: `all`

Included by default: `no`

---

`Unlock downloads`: Unlocks the ability to download any video. GIFs can be downloaded via the menu on long press.

Target version: `all`

Included by default: `yes`

---

</details>

## `com.vsco.cam`

<details>

`Unlock pro`: Unlocks pro features.

Target version: `345`

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

## `com.xiaomi.wearable`

<details>

`Fix login`: Fixes login for uncertified Mi Fitness app

Target version: `all`

Included by default: `yes`

---

`Force English locale`: Forces wearable devices to use the English locale.

Target version: `all`

Included by default: `yes`

---

</details>

## `com.zhiliaoapp.musically`

<details>

`Fix Google login`: Allows logging in with a Google account.

Target version: `all`

Included by default: `yes`

---

`Disable login requirement`: null

Target version: `all`

Included by default: `yes`

---

`SIM spoof`: Spoofs the information which is retrieved from the SIM card.

Target version: `all`

Included by default: `no`

---

`Settings`: Adds ReVanced settings to TikTok.

Target version: `32.5.3`

Included by default: `yes`

---

`Remember clear display`: Remembers the clear display configurations in between videos.

Target version: `32.5.3`

Included by default: `yes`

---

`Downloads`: Removes download restrictions and changes the default path to download to.

Target version: `32.5.3`

Included by default: `yes`

---

`Playback speed`: Enables the playback speed option for all videos and retains the speed configurations in between videos.

Target version: `32.5.3`

Included by default: `yes`

---

`Show seekbar`: Shows progress bar for all video.

Target version: `all`

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

Target version: `4.2.2`

Included by default: `yes`

---

</details>

## `de.simon.openinghours`

<details>

`Fix crash`: null

Target version: `1.0`

Included by default: `yes`

---

</details>

## `de.stocard.stocard`

<details>

`Hide offers tab`: null

Target version: `all`

Included by default: `yes`

---

`Hide story bubbles`: null

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

## `io.syncapps.lemmy_sync`

<details>

`Disable ads`: null

Target version: `all`

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

`Unlock subscription`: Unlocks the subscription feature but requires a custom client ID.

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

## `net.binarymode.android.irplus`

<details>

`Remove ads`: null

Target version: `all`

Included by default: `yes`

---

</details>

## `o.o.joey`

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

`Disable ads`: null

Target version: `all`

Included by default: `yes`

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

`Block embedded ads`: Blocks embedded stream ads using services like Luminous or PurpleAdBlocker.

Target version: `15.4.1`, `16.1.0`, `16.9.1`

Included by default: `yes`

---

`Block audio ads`: Blocks audio ads in streams and VODs.

Target version: `15.4.1`, `16.1.0`, `16.9.1`

Included by default: `yes`

---

`Block video ads`: Blocks video ads in streams and VODs.

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

`Debug mode`: Enables Twitch's internal debugging mode.

Target version: `all`

Included by default: `no`

---

</details>

