
   function openInBrowser() {
        var url = window.location.href;

        // Android (Chrome)
        var androidUrl = "intent://" + url.replace("https://", "").replace("http://", "") + "#Intent;scheme=https;package=com.android.chrome;end;";

        // iOS & general fallback
        var fallbackUrl = "https://www.google.com/search?q=" + encodeURIComponent(url);

        if (navigator.userAgent.includes("Android")) {
            window.location.href = androidUrl;
        } else {
            window.open(url, "_blank");
        }
    }