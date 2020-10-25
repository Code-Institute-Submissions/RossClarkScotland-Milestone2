const jukeboxBtn = document.querySelector("#jukeboxBtn");
jukeboxBtn.addEventListener("click", function() {

        const rando = Math.random();
        const num = (rando * 52) + 1;
        const playlist = Math.floor(num);

        if (playlist === 1) {
            document.querySelector("#jukebox").setAttribute("src", "https://www.youtube.com/embed/I5emPqmZSrM");
            document.querySelector("#song").innerHTML = "Nottamun Town by Fairport Convention";
        }

        if (playlist === 2) {
            document.querySelector("#jukebox").setAttribute("src", "https://www.youtube.com/embed/HwOWX6b8HHw");
            document.querySelector("#song").innerHTML = "Walkin' after midnight by Patsy Cline";
        }

        if (playlist === 3) {
            document.querySelector("#jukebox").setAttribute("src", "https://www.youtube.com/embed/OuC519ni1aE");
            document.querySelector("#song").innerHTML = "Iko Iko by The Dixie Cups";
        }

         if (playlist === 4) {
            document.querySelector("#jukebox").setAttribute("src", "https://www.youtube.com/embed/DgGuTicdtyg");
            document.querySelector("#song").innerHTML = "Who loves the sun by The Velvet Underground";
        }

        if (playlist === 5) {
            document.querySelector("#jukebox").setAttribute("src", "https://www.youtube.com/embed/sGDuGybCRSE");
            document.querySelector("#song").innerHTML = "The fool on the hill by The Beatles";
        }

        if (playlist === 6) {
            document.querySelector("#jukebox").setAttribute("src", "https://www.youtube.com/embed/W4euyTDhFnk");
            document.querySelector("#song").innerHTML = "Heartbreak Hotel by Elvis Presley";
        }

        if (playlist === 7) {
            document.querySelector("#jukebox").setAttribute("src", "https://www.youtube.com/embed/kEGuHdKn0Lc");
            document.querySelector("#song").innerHTML = "Immigrant Song by Led Zepplin";
        }

        if (playlist === 8) {
            document.querySelector("#jukebox").setAttribute("src", "https://www.youtube.com/embed/Bi6YHWjy3uU");
            document.querySelector("#song").innerHTML = "Midnight Special by Leadbelly";
        }

        if (playlist === 9) {
            document.querySelector("#jukebox").setAttribute("src", "https://www.youtube.com/embed/T5al0HmR4to");
            document.querySelector("#song").innerHTML = "A Hard Rain's Gonna Fall by Bob Dylan";
        }

        if (playlist === 10) {
            document.querySelector("#jukebox").setAttribute("src", "https://www.youtube.com/embed/SLCuL-K39eQ");
            document.querySelector("#song").innerHTML = "Night on Bald Mountain - from Fantasia";
        }

        if (playlist === 11) {
            document.querySelector("#jukebox").setAttribute("src", "https://www.youtube.com/embed/DE5lsoXeQDg");
            document.querySelector("#song").innerHTML = "I have the moon by Magnetic Fields";
        }

        if (playlist === 12) {
            document.querySelector("#jukebox").setAttribute("src", "https://www.youtube.com/embed/euJ22UqLD5Y");
            document.querySelector("#song").innerHTML = "Sweet home Chicago by The Blues Brothers";
        }

        if (playlist === 13) {
            document.querySelector("#jukebox").setAttribute("src", "https://www.youtube.com/embed/mrEk06XXaAw");
            document.querySelector("#song").innerHTML = "Ravel's Bolero";
        }

        if (playlist === 14) {
            document.querySelector("#jukebox").setAttribute("src", "https://www.youtube.com/embed/lot1xjsFbTc");
            document.querySelector("#song").innerHTML = "Danse macabre by Bela Fleck";
        }

        if (playlist === 15) {
            document.querySelector("#jukebox").setAttribute("src", "https://www.youtube.com/embed/De1LCQvbqV4");
            document.querySelector("#song").innerHTML = "Octupus's garden by The Beatles";
        }

        if (playlist === 17) {
            document.querySelector("#jukebox").setAttribute("src", "https://www.youtube.com/embed/JL5sv1_1MQM");
            document.querySelector("#song").innerHTML = "The blue Danube";
        }

        if (playlist === 18) {
            document.querySelector("#jukebox").setAttribute("src", "https://www.youtube.com/embed/aG-kLDAj8mc");
            document.querySelector("#song").innerHTML = "The Emperor Waltz";
        }

        if (playlist === 19) {
            document.querySelector("#jukebox").setAttribute("src", "https://www.youtube.com/embed/uhRjyLLUdhw");
            document.querySelector("#song").innerHTML = "Don't fear the reaper by Blue Oyster Cult";
        }

        if (playlist === 20) {
            document.querySelector("#jukebox").setAttribute("src", "https://www.youtube.com/embed/CsZ4XIOEKLY");
            document.querySelector("#song").innerHTML = "T.V. Eye by The Stooges";
        }

        if (playlist === 21) {
            document.querySelector("#jukebox").setAttribute("src", "https://www.youtube.com/embed/Z9GbGO7CKdQ");
            document.querySelector("#song").innerHTML = "Cat people by David Bowie";
        }

        if (playlist === 22) {
            document.querySelector("#jukebox").setAttribute("src", "https://www.youtube.com/embed/sh5gtGk9XZ8");
            document.querySelector("#song").innerHTML = "Sally MacLennane by The Pogues";
        }

        if (playlist === 23) {
            document.querySelector("#jukebox").setAttribute("src", "https://www.youtube.com/embed/98JrWm9IMMA");
            document.querySelector("#song").innerHTML = "Little drummer boy by Grace Jones";
        }

        if (playlist === 24) {
            document.querySelector("#jukebox").setAttribute("src", "https://www.youtube.com/embed/FSZxJpf1IHI");
            document.querySelector("#song").innerHTML = "Tango till they're sore by Tom Waits";
        }

        if (playlist === 25) {
            document.querySelector("#jukebox").setAttribute("src", "https://www.youtube.com/embed/2mhPjXiZg64");
            document.querySelector("#song").innerHTML = "Winter wonderland by Darlene Love";
        }

        if (playlist === 26) {
            document.querySelector("#jukebox").setAttribute("src", "https://www.youtube.com/embed/2Q_ZzBGPdqE");
            document.querySelector("#song").innerHTML = "Help! by The Beatles";
        }

        if (playlist === 27) {
            document.querySelector("#jukebox").setAttribute("src", "https://www.youtube.com/embed/OtTmR_v6pz4");
            document.querySelector("#song").innerHTML = "One last hope from Hercules";
        }

         if (playlist === 28) {
            document.querySelector("#jukebox").setAttribute("src", "https://www.youtube.com/embed/9MO1KyNUOIs");
            document.querySelector("#song").innerHTML = "Viva Las Vegas by Elvis Presley";
        }
        
          if (playlist === 29) {
            document.querySelector("#jukebox").setAttribute("src", "https://www.youtube.com/embed/UCrSmJ_YCk8");
            document.querySelector("#song").innerHTML = "Why can't he be you by Patsy Cline";
        }

          if (playlist === 30) {
            document.querySelector("#jukebox").setAttribute("src", "https://www.youtube.com/embed/bch1_Ep5M1s");
            document.querySelector("#song").innerHTML = "San Francisco by Scott Mckenzie";
        }

          if (playlist === 31) {
            document.querySelector("#jukebox").setAttribute("src", "https://www.youtube.com/embed/9xFkjmYaAfQ");
            document.querySelector("#song").innerHTML = "Marie Laveau by Dr Hook";
        }

          if (playlist === 32) {
            document.querySelector("#jukebox").setAttribute("src", "https://www.youtube.com/embed/hX8RXWBXSXM");
            document.querySelector("#song").innerHTML = "Marie Laveau by Oscar Celestin";
        }

          if (playlist === 33) {
            document.querySelector("#jukebox").setAttribute("src", "https://www.youtube.com/embed/hztBex4Ebgg");
            document.querySelector("#song").innerHTML = "Litanie des saints Dr John";
        }

          if (playlist === 34) {
            document.querySelector("#jukebox").setAttribute("src", "https://www.youtube.com/embed/dVxYL2sI1oM");
            document.querySelector("#song").innerHTML = "The lament of the Cherokee by Indian Reservation";
        }

          if (playlist === 35) {
            document.querySelector("#jukebox").setAttribute("src", "https://www.youtube.com/embed/V_IrdS-zu48");
            document.querySelector("#song").innerHTML = "Johnny Appleseed";
        }

          if (playlist === 36) {
            document.querySelector("#jukebox").setAttribute("src", "https://www.youtube.com/embed/zrcpOncueZI");
            document.querySelector("#song").innerHTML = "Dark am I yet lovely by Sinead O'Connor";
        }

          if (playlist === 37) {
            document.querySelector("#jukebox").setAttribute("src", "https://www.youtube.com/embed/6p-lDYPR2P8");
            document.querySelector("#song").innerHTML = "Material girl by Madonna";
        }

          if (playlist === 38) {
            document.querySelector("#jukebox").setAttribute("src", "https://www.youtube.com/embed/l5FyEQ7cqrM");
            document.querySelector("#song").innerHTML = "Old friends";
        }

          if (playlist === 39) {
            document.querySelector("#jukebox").setAttribute("src", "https://www.youtube.com/embed/o7U3lo80YrQ");
            document.querySelector("#song").innerHTML = "Cheers theme song";
        }

          if (playlist === 40) {
            document.querySelector("#jukebox").setAttribute("src", "https://www.youtube.com/embed/VXRQV5z9GL8");
            document.querySelector("#song").innerHTML = "Life is a cabaret from Cabaret";
        }

        if (playlist === 41) {
            document.querySelector("#jukebox").setAttribute("src", "https://www.youtube.com/embed/0lAK9trqgAg");
            document.querySelector("#song").innerHTML = "In the dark with you by Greg Brown";
        }

        if (playlist === 42) {
            document.querySelector("#jukebox").setAttribute("src", "https://www.youtube.com/embed/B3oCB9RdiB4");
            document.querySelector("#song").innerHTML = "Magic bus by The Who";
        }

        if (playlist === 43) {
            document.querySelector("#jukebox").setAttribute("src", "https://www.youtube.com/embed/T_Cqy3uxRXc");
            document.querySelector("#song").innerHTML = "Hang me, oh hang me by Dave van Kronk";
        }

        if (playlist === 44) {
            document.querySelector("#jukebox").setAttribute("src", "https://www.youtube.com/embed/yJXN5VPkyH8");
            document.querySelector("#song").innerHTML = "Death is not the end by Nick Cave and Friends";
        }

        if (playlist === 45) {
            document.querySelector("#jukebox").setAttribute("src", "https://www.youtube.com/embed/sYraVHUONeQ");
            document.querySelector("#song").innerHTML = "Cold wind to Valhalla by Jethro Tull";
        }

        if (playlist === 46) {
            document.querySelector("#jukebox").setAttribute("src", "https://www.youtube.com/embed/6ouJPYL9tqI");
            document.querySelector("#song").innerHTML = "Sam Bass by Alan Lomax";
        }

        if (playlist === 47) {
            document.querySelector("#jukebox").setAttribute("src", "https://www.youtube.com/embed/7OUV78aVCXo");
            document.querySelector("#song").innerHTML = "Quiet riot by Thunderbird";
        }

        if (playlist === 48) {
            document.querySelector("#jukebox").setAttribute("src", "https://www.youtube.com/embed/w4flBb-LbNs");
            document.querySelector("#song").innerHTML = "City of dreams by Talking Heads";
        }

        if (playlist === 49) {
            document.querySelector("#jukebox").setAttribute("src", "https://www.youtube.com/embed/qQvIAs-nPSo");
            document.querySelector("#song").innerHTML = "What's new pussycat? by Tom Jones";
        }

        if (playlist === 50) {
            document.querySelector("#jukebox").setAttribute("src", "https://www.youtube.com/embed/Rs2nH9gSXOE");
            document.querySelector("#song").innerHTML = "The way you look tonight";
        }

        if (playlist === 51) {
            document.querySelector("#jukebox").setAttribute("src", "https://www.youtube.com/embed/7Tb1kkg8e5g");
            document.querySelector("#song").innerHTML = "Don't let me be misunderstood by The Animals";
        }

        if (playlist === 52) {
            document.querySelector("#jukebox").setAttribute("src", "https://www.youtube.com/embed/atkVaKz9r5Y");
            document.querySelector("#song").innerHTML = "Closer to fine by The Indigo Girls";
        }
    });