            function ran_col() { //function name
                var color = '#'; // hexadecimal starting symbol
                var letters = ['000000','FF0000','00FF00','0000FF','FFFF00','00FFFF','FF00FF','C0C0C0']; //Set your colors here
                color += letters[Math.floor(Math.random() * letters.length)];

                var color_text = '#'; // hexadecimal starting symbol
                var letters_text = ['000000','FF0000','00FF00','0000FF','FFFF00','00FFFF','FF00FF','C0C0C0']; //Set your colors here
                color_text += letters_text[Math.floor(Math.random() * letters.length)];

                document.getElementById('posts').style.color = color_text;
                document.getElementById('posts').style.background = color; // Setting the random color on your div element.
            }