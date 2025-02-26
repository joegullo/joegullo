
        function checkOnlineStatus() {

            if (navigator.onLine) {

                document.getElementById("status").innerHTML = "Online <span class='online-status' style='color:green;'>●</span>";

            } else {

                document.getElementById("status").innerHTML = "Offline <span class='offline-status'>●</span>";

            }

        }



        window.addEventListener('load', checkOnlineStatus);

        window.addEventListener('online', checkOnlineStatus);

        window.addEventListener('offline', checkOnlineStatus);

