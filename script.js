document.addEventListener("DOMContentLoaded", function() {
    const searchInput = document.getElementById('searchInput');
    const searchResults = document.getElementById('searchResults');

    searchInput.addEventListener('input', function() {
        const query = searchInput.value.trim().toLowerCase();
        searchResults.innerHTML = '';

        if (query.length === 0) {
            return;
        }

        // Sample data with both result text, function, and URL
        const data = [
            { text: 'Home', URL: 'index.html' },
            { text: 'Time', URL: 'clock.html' },
            { text: 'Clock', URL: 'clock.html' },
            { text: 'Dice', URL: 'gamble.html' },
            { text: 'Roll', URL: 'gamble.html' },
            { text: 'Games', URL: 'games.html' },
            { text: 'Unblocked', URL: 'games.html' },
        ];

        const filteredData = data.filter(item => item.text.toLowerCase().includes(query));

        if (filteredData.length === 0) {
            searchResults.innerHTML = '<button disabled>No results found</button>';
        } else {
            filteredData.forEach(item => {
                const button = document.createElement('button');
                button.textContent = item.text;
                button.addEventListener('click', function() {
                    if (typeof item.func === 'function') {
                        item.func();
                    } else {
                        console.error('Function ' + item.func + ' is not defined.');
                    }
                    if (item.URL) {
                        window.open(item.URL, '_self'); // Open URL in new tab
                    }
                });
                searchResults.appendChild(button);
            });
        }
    });

    // Function to open Basketrandom
    function opengame() {
        var win = window.open();
        var url = "https://basketrandom.io/";
        var iframe = win.document.createElement('iframe');
        iframe.style.width = "100%";
        iframe.style.height = "100%";
        iframe.style.border = "none";
        iframe.src = url;
        win.document.body.appendChild(iframe);
    }

    // Function to open Smashkarts
    function opengame1() {
        var win = window.open();
        var url = "https://smashkarts.io/";
        var iframe = win.document.createElement('iframe');
        iframe.style.width = "100%";
        iframe.style.height = "100%";
        iframe.style.border = "none";
        iframe.src = url;
        win.document.body.appendChild(iframe);
    }

    // Function to open House Of Hazards
    function opengame2() {
        var win = window.open();
        var url = "https://houseofhazards.io/";
        var iframe = win.document.createElement('iframe');
        iframe.style.width = "100%";
        iframe.style.height = "100%";
        iframe.style.border = "none";
        iframe.src = url;
        win.document.body.appendChild(iframe);
    }

    // Function to open Minecraft
    function opengame3() {
        var win = window.open();
        var url = "https://eaglercraft.com/mc/1.8.8/";
        var iframe = win.document.createElement('iframe');
        iframe.style.width = "100%";
        iframe.style.height = "100%";
        iframe.style.border = "none";
        iframe.src = url;
        win.document.body.appendChild(iframe);
    }
});