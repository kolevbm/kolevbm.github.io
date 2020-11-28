---
layout: post
title: Xamarin display tricks
date:   2020-11-27 20:41:49 +0200
categories: xamarin.forms android
---
**Keep orientation of display fixed**
in the main activity of your Android project add the ScreenOrientation property to what you like
```csharp
[Activity(Theme = "@style/MainTheme",
              ConfigurationChanges = ConfigChanges.ScreenSize | ConfigChanges.Orientation | ConfigChanges.UiMode | ConfigChanges.ScreenLayout | ConfigChanges.SmallestScreenSize,
                ScreenOrientation = ScreenOrientation.SensorPortrait)]
```
[xamarinDocs](https://docs.microsoft.com/en-us/xamarin/xamarin-forms/user-interface/layouts/device-orientation?tabs=windows)  

**Keep display non-locked** (prevent locking of the device and turning off display) in a specific page. First you need the Xamarin.Essentials plugin from the nuget manager and install it on both projects Forms and Android. I use [Prism Library](https://prismnew.readthedocs.io/en/latest/Xamarin-Forms/1-Getting-Started/) so my code snippet is this:
```csharp
        public void OnNavigatedFrom(INavigationParameters parameters)
        {
            DeviceDisplay.KeepScreenOn = false;
        }

        public void OnNavigatedTo(INavigationParameters parameters)
        {
            DeviceDisplay.KeepScreenOn = true;
        }
```
[xamarin.Essentials.DeviceDisplay](https://docs.microsoft.com/en-us/xamarin/essentials/device-display?tabs=android)
