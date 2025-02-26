
        function checkOnlineStatus() {

            if (navigator.onLine) {

                document.getElementById("online-status").innerHTML = `Online <span class='online-status' style='color:green;'>●</span>`;

            } else {

                document.getElementById("online-status").innerHTML = `Offline <span class='offline-status'>●</span>`;

            }

        }



        window.addEventListener('load', checkOnlineStatus);

        window.addEventListener('online', checkOnlineStatus);

        window.addEventListener('offline', checkOnlineStatus);

