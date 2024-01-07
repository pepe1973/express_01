# Alap beállítás

1. Hozzunk létre egy mappát `express_feladat` néven.
2. Nyissuk meg a `Visual Studio Code` kódszerkesztővel.
3. A `ctrl+ö` segítségével nyissunk meg terminált.
4. Váltsunk át a `Git Bash` parancssori felületre:
   !['Első kép'](/images_md/kep_01.png)
5. Gépeljük be a következő utasítást:
   `npm init -y`
6. Gépeljük be a következő utasítást:
   `npm install -D nodemon`
7. Gépeljük be a következő utasítást:
   `npm install dotenv ejs express`
8. Szerkesszük a `package.json` állományt:
   !['Második kép'](/images_md/kep_02.png)
9. Hozzuk létre a `public` és `views` nevű mappákat a parancssorból:
   `mkdir public views`
10. Hozzuk létre a `.env` és `server.js` nevű állományokat az alapmappában parancssorból:
    `touch .env server.js`
11. A `.env` állomány szerkesztése (1.rész):
    !['Harmadik kép'](/images_md/kep_03.png)
12. A `server.js` állomány szerkesztése (1.rész):
    !['Negyedik kép'](/images_md/kep_04.png)
13. A szerver elindítása a parancssorból:
    `npm run dev`
    !['Ötödik kép'](/images_md/kep_05.png)
14. `ctrl + jobb egérgomb` a `localhost` címen:
    !['Hatodik kép'](/images_md/kep_06.png)
15. Látható hogy a böngésző által küldött lekérésre (`request`) még nem tud semmit válaszolni (`response`) a szerver:
    `Cannot GET /`
16. A `server.js` állomány szerkesztése (2.rész):
    !['Hetedik kép'](/images_md/kep_07.png)
17. Újabb lekérdezés esetén már van válasz:
    !['Nyolcadik kép'](/images_md/kep_08.png)
18. Általában egy állomány (html, ejs, hbs stb.) tartalmát akarjuk visszaküldeni. Most az `index.ejs` állománnyal szeretnénk dolgozni. Ehhez a `render()` metódust fogjuk használni. Ebben az egy esetben elhagyható az `ejs` kiterjesztés az állomány végéről:
    !['Kilencedik kép'](/images_md/kep_09.png)
19. Látható, hogy kaptunk egy hibaüzenetet, hogy nincs megjelenítő motor beállítva.
    !['Tizedik kép'](/images_md/kep_10.png)
20. Tegyük meg. És a `views` mappába helyezzük el az `index.ejs` állományt.
    !['Tizenegyedik kép'](/images_md/kep_11.png)
    !['Tizenkettedik kép'](/images_md/kep_12.png)
    !['Tizenharmadik kép'](/images_md/kep_13.png)
    !['Tizennegyedik kép'](/images_md/kep_14.png)
21. Adjunk egy háttérképet az oldalnak és adjunk neki stílust. Ehhez a `public` mappában hozzunk létre egy `css` és `images` mappát. A `css` mappában egy `stilus.css`, míg az `images` mappában egy `cica.jpg` állományt helyezzünk el.
    !['Tizenötödik kép'](/images_md/kep_15.png)
22. Hogy használhassuk ezeket az állományokat el kell végezni néhány beállítást a `server.js` állományban.
    !['Tizenhatodik kép'](/images_md/kep_16.png)
23. Nézzük az egyes állományokat. Figyeljük meg, hogy hol mennyi pontot használunk a mappa neve előtt.
    !['Tizenhetedik kép'](/images_md/kep_18.png)
    !['Tizennyolcadik kép'](/images_md/kep_19.png)
24. A végeredmény.
    !['Tizenkilencedik kép'](/images_md/kep_17.png)

# 404-es hiba

1. Nem létező oldalra való hivatkozás esetén beállítunk a `views` mappában egy `404.ejs` állományt és hozzáadunk egy `hiba.css` külső stíluslapot a `css` mappában.
   !['Huszadik kép'](/images_md/kep_20.png)
2. A `hiba.css` állomány:
   !['Huszonegyedik kép'](/images_md/kep_21.png)
3. A `404.ejs` állomány:
   !['Huszonkettedik kép'](/images_md/kep_22.png)
4. A végeredmény.
   !['Huszonharmadik kép'](/images_md/kep_23.png)

# Navigáció a különböző oldalak között

1. Ehhez hozzunk létre egy `masik.ejs` nevű állományt a `views` mappában, amely a `/masik` route-hoz fog tartozni. Vigyázzunk arra, hogy a 404-es hibakezelés legyen mindig az utolsó a route-ok sorában! Nézzük a `server.js`-t:
   !['Huszonnegyedik kép'](/images_md/kep_24.png)
2. Most a `masik.ejs` állományt.
   !['Huszonötödik kép'](/images_md/kep_25.png)
3. A végeredmény.
   !['Huszonhatodik kép'](/images_md/kep_26.png)
