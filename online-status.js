
        function checkOnlineStatus() {

            if (navigator.onLine) {

                document.getElementById("online-status").innerHTML = `<div class="badge badge-outline"> Online <span class='online-status' style='color:#45B39D;padding-left:5px;'>●</span></div>`;

            } else {

                document.getElementById("online-status").innerHTML = `<div class="badge badge-outline"> Offline <span class='offline-status' style='padding-left:5px;'>●</span></div>`;

            }

        }



        window.addEventListener('load', checkOnlineStatus);

        window.addEventListener('online', checkOnlineStatus);

        window.addEventListener('offline', checkOnlineStatus);

