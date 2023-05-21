let nyarisportagak="Asztalitenisz,Atlétika,Boccia,Csörgőlabda,Erőemelés,Evezés,Íjászat,Judo,Kajak-kenu,Kerekesszékes kosárlabda,Kerekesszékes rugby,Kerekesszékes tenisz,Kerekesszékes vívás,Kerékpározás,Látássérült labdarúgás,Lovaglás,Sportlövészet,Teakwondo,Tollaslabda,Triatlon,Ülőröplabda,Úszás";
let telisportagak="Alpesi sí,Biatlon,Kerekesszékes curling,Sífutás,Snowboard,Ülő jégkorong";
let mappa="";

var nyariLeirasok = [];
nyariLeirasok[0]="Az asztalitenisz már az első paralimpián (1960-ban, Rómában) a program része volt. Ezen a versenyen 10 ország, 35 versenyzője 11 versenyszámban mérte össze tudását. A 2016. évi riói paralimpia asztalitenisz versenyein már 47 ország  269 versenyzője 29 versenyszámban vetélkedett az érmekért.  Az asztalitenisz sportág rendkívüli fejlődését és töretlen népszerűségét, mutatja a nemzetközi szövetség (IPC) nyilvántartásának globális adatbázisa is, amely szerint ma már több mint 130 országban, közel 5400 asztalitenisz parasportolót tartanak nyilván. A nemzetközi versenyzői nyilvántartásba hazánk részéről ez idáig összesen 80 asztaliteniszező került be. A para asztalitenisz térhódítása mind az 5 földrészen kiteljesedett, világméretűvé vált.";
nyariLeirasok[1]="Az para atlétikát a Nemzetközi Paralimpiai Bizottság (IPC), az IPC atlétikai bizottsága szervezi, kétévente rendez világbajnokságot, illetve regionális bajnokságokat. Az IPC az atlétikai versenyeket a Nemzetközi Atlétika Szövetség szabályai szerint bonyolítja a mozgáskorlátozott, látássérült és értelmi sérült sportolók számára. A paralimpiai játékokon való részvételhez ezeken a versenyeken közvetlen módon lehet helyet szerezni, illetve a világranglista alapján állapítják meg az országok számára biztosított kvótát és az ún. szabadkártyákat. A paralimpiai játékok egyik legnépszerűbb sportága az atlétika, ebben a sportágban rendezik a legtöbb versenyszámot is. Az atlétika 1960 óta szerepel a paralimpián.";
nyariLeirasok[2]="A boccia eredetéről többféle elképzelés ismeretes. Egyes vélemények szerint a boccia elődjének is tekinthető labdajátékot a rómaiak a görögöktől lesték el. Valószínűbb azonban, hogy ennek a játéknak a gyökereit a francia „petanque” játékban kell keresni. A sportágat olyan emberek számára találták ki, akik súlyosan mozgássérültek. A bocciat 6 piros, 6 kék, és 1 fehér labdával játsszák, egy 6x12.5 méteres pályán. A mérkőzéseket egyéniben, párosban, vagy csapatban űzik. A verseny célja, hogy a színes labdákkal eltalálják a célgolyót."
nyariLeirasok[3]="A csörgőlabdát a II. világháborúban találták ki Németországban, és a hadirokkantak rehabilitációjában alkalmazták. Először Európában terjedt el, Németország után az északi régióban, például Dániában 1964-ben játszottak először csörgőlabda-mérkőzést. Tömegesen a hetvenes években kedvelték meg, és vált fokozatosan versenysporttá. Kezdetben országonként változó laza szabályok szerint játszották.";
nyariLeirasok[4]="Először 1986-ban, a szófiai világbajnokságon indultak magyarok ebben a sportágban. Ezt követően 1988-ban már hazánkban is rendeztek országos bajnokságot Pécsett. A rákövetkező években a magyar csapat számos nemzetközi versenyen szerepelt és ért el szép helyezéseket. Az első jelentős sikert Nánásy István szöuli aranyérme jelentette, az 1988-as paralimpiai játékokon. 2000-től már a hazai vidéki városokban is rendeztek erőemelő versenyt, ahol a fogyatékkal élők is elindultak.";
nyariLeirasok[5]="A para-evezés az evezés sportág azon ágazata, amely kortól függetlenül egyaránt nyitva áll a fogyatékkal élő férfiak és nők számára. A para-evezést korábban adaptív evezésnek hívták. Ma angolul pararowing, korábban angolul Adaptive Rowing nevet viselte. Magyarországon számos evezős egyesületben, klubban és szakosztályban van lehetőség para-evezésre.";
nyariLeirasok[6]="Több, mint hatvan éve tesztelik a fogyatékos sportolók a célzó képességüket és precizitásukat az íjászvetélkedéseken. Az első rangos nemzetközi íjászversenyt fogyatékos emberek számára 1948-ban, a Stoke Mandeville-i játékokon szervezték. Az első nemzetközi verseny óta folyamatosan jelen van mint parasportág, az íjászat,  álló/ kerekesszékes – női/férfi kategóriákban. Minden verseny kiváló példája az erőnek és a tiszta összpontosításnak. A paralimpiai játékokon egyéniben, párosban, valamint csapatban indulhatnak versenyzők.";
nyariLeirasok[7]="A judo 1988-ban került be a paralimpiai versenyszámok közé. Egészen a Sydney-i Játékokig csak férfiak számára rendeztek küzdelmeket, míg 2004-től már a hölgyek is tatamira léphetnek. Ma már az épek kvalifikációs rendszeréhez nagyon hasonló módon lehet indulási jogot szerezni a paralimpiai judo versenyekre is. A kezdeti néhány országból ma már világméretű népszerűségnek örvendő sportággá vált a judo a látássérült sportolók táborában is.";
nyariLeirasok[8]="A kajak-kenuban a fogyatékkal élők sportja, a para kajak-kenu – vagy ahogy a nemzetközi szóhasználatban gyakori, a Paracanoe – mint önálló szakág először a 2009. évi gyorsasági világbajnokságon, a kanadai Dartmouthban jelent meg. Igaz, akkor még csak bemutató versenyszámként. Ezt követően, 2010-ben, a poznani világbajnokságon – amelyen 5 kontinens, 26 országának 63 versenyzője állt rajthoz – már teljes értékű világbajnokság keretében versenyezhettek a para kajakosok és kenusok. A világbajnokságot követően 2010 decemberében megszületett a döntés, az IPC a paracanoe-t felvette a riói paralimpiai sportágak közé. Ez a döntés nagy lendületet adott a szakág nemzetközi és hazai fejlődésének, amelyet mi sem tükröz jobban, mint, hogy a 2015. évi milánói paralimpiai kvalifikációs világbajnokságon 42 ország delegált versenyzőket.";
nyariLeirasok[9]="Az egyik legnépszerűbb sportág a mozgássérült sportolók körében külföldön, és egyben a legnagyobb érdeklődéssel kísért paralimpiai verseny. Eredetileg az Amerikai Egyesült Államokban alakult ki a II. világháború alatt. Korábban a profibajnokságban játszó, de a háborúban megrokkant kosarazók nem tudtak lemondani az általuk imádott játékról ezért kerekesszékben is folytatták. Nagy-Britanniában viszont a hadirokkantak rehabilitációjának volt fontos eszköze a sport. Stoke Mandeville-ben Sir Ludwig Guttmann irányításával nemzetközi játékokat is szerveztek.";
nyariLeirasok[10]="1979-ben volt az első Kanadán kívüli bemutatkozás, és ebben az évben rendezték az elő Kanadai Nemzeti Bajnokságot, már kerekes székes rögbi (quad rugby) néven.A kerekes székes rögbit 1977-ben, Kanadában találták ki. Olyan férfiak és nők űzhetik, akik gerincsérülésük vagy egyéb okok (gyermekbénulás, szélütés, különböző izomsorvadás, dysmelia, amputálások vagy egyéb fajta neurológiai problémák) miatt legalább három végtagjukban, nem neurológiai rokkantságnál pedig négy végtagban rendelkeznek korlátozott funkciókkal. A sport kialakításánál a cél egy, még a kerekes székes kosárlabdánál is mozgalmasabb, gyorsabb játék kialakítása volt.";
nyariLeirasok[11]="1976-ban az amerikai Brad Parks , a kerekesszékes tenisz „keresztapja” megnézett egy videó felvételt Jeff Mimebrakerről, amint az kerekesszékben teniszezik kórházi rehabilitációja alatt, egy sí-balesetet követően, melynek során deréktól lefelé megbénult. Egy hónappal később maga is kipróbálta egy családi vakáció során és rájött, hogy a játék játszható a pálya mérete vagy a felszerelés módosítása nélkül is.  A játékosoknak megengedik, hogy kétszer pattanjon a labda és ezzel megszületett a modern kerekesszékes tenisz.";
nyariLeirasok[12]="A kerekesszékes vívás szabályai:A kerekesszékes sportolók számára Sir Ludwig Guttman mutatta be először a vívást 1953-ban. Hét évvel később, 1960-ban a római Nemzetközi Stoke Mandewille-i Játékokon - amely a paralimpiai játékok elődje-, már az egyik versenysportágként  tartották számon. ";
nyariLeirasok[13]="A parakerékpáros szakág 2007-ben jött létre az UCI (Nemzetközi Kerékpáros Szövetség) égisze alatt, amikor az IPC (Nemzetközi Paralimpiai Bizottság) szerződésben ratifikálta ezt. Két szakágban;  országúti és pálya versenyeken rendeznek 8 versenyszámban különböző futamokat, pályán 17, országúton 33 paralimpiai bajnokot hirdetnek.  A parasportok közül a harmadik legtöbb, azaz 50 aranyérem szerezhető a sportágban.";
nyariLeirasok[14]="A sportágat a Nemzetközi Látássérült Sportszövetség (IBSA), valamint a Nemzetközi Labdarúgó Szövetség (FIFA) szabályzatai alapján találták ki 1996-ban.  A látássérült labdarúgást 5 fős csapatok (4+1) játsszák. A kapuson kívül, a pályán minden mezőnyjáték szemtakarót visel, az egységes lehetőségek miatt. A megszokottakhoz képest itt a nézőknek csöndbe kell lenniük, amikor a mérkőzés folyik, mivel a labda hangot ad, ami tájékoztatás céljául szolgál a játékosoknak. A sportolók további segítséget a guidejuktól kapnak, aki a saját csapatának hálója mögül instrukciókkal oszt ki.";
nyariLeirasok[15]="A sportág először 1996-ban, Atlantában szerepelt, mint önálló szám. Klasszifikáció szempontjából bármilyen fizikai vagy látássérült problémával rendelkező sportoló indulhat. A versenyeken a lovaglás több fajtája létezik: vannak olyan számok, amelyeknél a kötött sorokat kell minél pontosabban megismételni, azonban akadnak improvizatívak is, amelyeket zenére adnak elő a lovasok. A verseny során az induló lovagló képességeit értékelik. Segédeszközök használata megengedett, ilyen például a pálca is.";
nyariLeirasok[16]="A sportlövészet az 1976-os paralimpiai játékok óta része a versenyprogramnak.  Azóta számos változást eszközöltek, új számok és kombinációk jelentek meg a programban.  Az atléták több távon (10, 25 és 50 méteren) mérhetik össze ügyességüket vegyes, vagy nemre bontott csoportokban.  Összesen 12 paralimpiai szám van, ebből 4 pisztolyos és 8 puskás (6 SH1 és 2 SH2). Hat szám nyitott férfiak és nők számára vegyes csoportoknak  és három-három csak férfiaknak vagy csak nőknek.";
nyariLeirasok[17]="A parataekwondo sportág a World Taekwondo (WT) taekwondo olimpiai sportág fogyatékkal élő sportolóknak szánt adaptációja. A harcművészeti ágazat többféleféle sérült személy számára elérhető és megfelelő szakmai felügyelet mellett űzhető. Egy fiatal sportágról beszélünk, aminek a küzdelmi része világszinten 2006-ban, formagyakorlat ágazata pedig 2013-ban kezdődött. Az első parataekwondo világbajnokságot 2009-ben tartották Bakuban (Azerbaijan).";
nyariLeirasok[18]="A para-tollaslabda olyan sport, amelyet bármilyen életkorú, testi fogyatékossággal élő nők és férfiak egyaránt játszhatnak. A sport folyamatosan növekszik, és minden évben új versenyzőket, valamint új nézőket is vonz. A sportág először a 2020-as paralimpiai játékokon fog debütálni Tokióban.";
nyariLeirasok[19]="A versenyeket (világkupák – VK, kontinens bajnokságok, világbajnokságok) az esetek nagy részében bizonyos szempontból integráltan rendezik. Ez azt jelenti, hogy a para futamok a nemzetközi versenyeken az épek futamai között kerülnek megrendezésre, azonos a rendezői és bírói stáb és a pályán is csak a para versenyzők sajátosságainak megfelelően módosítanak (nincsenek pl. nagyon meredek emelkedők a kerekesszékes és a tandemes versenyzőkre tekintettel).";
nyariLeirasok[20]="A mozgáskorlátozottak sportmozgalmának fejlődését a második világháború utáni időszaktól számíthatjuk, amikor Angliában Dr. Ludwig Guttmann professzor vezetésével létrehoztak a háborús sérültek számára egy rehabilitációs intézetet. Itt a sportot kezdetben a rehabilitáció eszközeként használták fel, később azonban már versenyeket is szerveztek a professzor irányításával. Az első nemzetközi versenyen, 1952-ben az atlétika és úszás versenyszámai mellett már a német Sitzball elnevezésű csapatjáték is helyet kapott. A hollandok azonban nem találták megfelelőnek a Sitzballt a mozgáskorlátozottak számára, így a játékötletet alapul véve, és ennek szabályait a röplabdához hasonlóvá téve létrehozták az ülőröplabda játékát.  A sportág kezdeti szabályai napjainkig egyre inkább a röplabda játék szabályaira hasonlítanak.";
nyariLeirasok[21]="A paralimpiai játékokon az úszás vonzza a legnagyobb tömegeket és ez számít az egyik legnépszerűbb eseménynek. A sportág alapvetően a fizioterápiával és a rehabilitációval hozható kapcsolatba, hiszen az úszás az összes sérültségi kategóriában versenyző sportoló számára elérhető. Jellegzetessége, hogy a sportolók a verseny ideje alatt nem használnak protéziseket vagy egyéb segédeszközt. A versenyeken az IPC Nemzetközi Úszóbizottsága által előírt szabályok érvényesek. Összesen 14 sérültségi kategóriában indulhatnak versenyzők.";


var teliLeirasok = [];
teliLeirasok[0]="Az alpesi síelés három kategóriában kerül megrendezésre: ülő, álló, látássérült. Ezeken belül, összesen 11 sportszámot rendeznek meg álló, hármat a látássérült és ötöt az ülő kategóriában. Mindegyik számban különböző teljesítményű indulók versenyeznek. Egy speciális rendszer lehetővé teszi, hogy a sérültség fokától függően a futó óra időeredményeit összehasonlítsák (magasabb fokú fogyatékosság egy lassabban futó órával egyenértékű).";
teliLeirasok[1]="A biatlon 1988-ban került a paralimpiai játékok versenyprogramjába Innsbruckban, de még csak a fizikailag sérült sportolók számára. 1992 óta a vizuálisan sérült versenyzők is részt vehetnek a sportágban. A versenyek távjai nőknél 6-10-12.5 kilométer, férfiaknál 7.5-12.5-15 kilométer, melyek 2.0 vagy 2.5 kilométeres körből állnak, és amelyet három vagy öt alkalommal szabad technikában teljesítenek a versenyzők.";
teliLeirasok[2]="A játék eredete nem egyértelmű. Bár Skóciában nemzeti sportnak tartják, valószínűbb, hogy Hollandia a játék hazája. Ezt a sportot 450 éve már játszották – nem a mai szabályok szerint – a Németalföldön. Id. Pieter Bruegel festményén is megörökítette a curlinget. Első írásos említése Skóciából származik 1540-ből, John McQuhin, Paisley közjegyzője tollából. Az első hivatalos curlingklubot 1838-ban alapították Edinburghban. Az első nemzetközi mérkőzést az Egyesült Államok és Kanada csapata játszotta 1884-ben. A játék gyorsan tovább terjedt Svédországban, Svájcban, Norvégiában, és Új-Zélandon. A curling első szálykönyvét a Grand Caledonian Curling Clubban alapították meg. A curling 1924-ben Chamonixban mutatkozott be a téli olimpiai játékokon. Az első kerekesszékes curling-világbajnokságot 2002 januárjában tartották, és még annak az éven márciusában a Nemzetközi Paralimpai Bizottság engedélyezte a vegyes csapatok versenyzését a téli paralimpiákon.";
teliLeirasok[3]="A sífutás először  az 1976-os  téli paralimpiai játékokon, Örnsköldsvikben, Svédországban jelent meg. A versenyen egyaránt indulhatnak mozgáskorlátozottak és látássérültek is. Három különböző távon indulnak a versenyzők, rövid, középtáv és távolsági futamokon.";
teliLeirasok[4]="A fogyatékkal élők számára az első hivatalos snowbard versenyt, az úgynevezett adaptív snowboard versenyt  2000-ben tartották USASA állampolgárainak Waterville Valley NH, az USA-ban. A szabályozott adaptív snowboard versenyek sora után 2008-ban Észak-Amerikában a Világ Snowboard Szövetsége elfogadott egy nemzetközi szabályrendszert, ami lefektette azokat a szabályokat, ami alapján már paralimpiai sportágként is szabályozható sportágként tartották számon.";
teliLeirasok[5]="Az ülő jégkorongot Svédországban találták ki az 1960-as évek elején. Olyan sportolók kezdték űzni, akik korábban jégkorongoztak, de valamilyen testi sérülésüket követően nem tudták folytatni a sportot. Az első nemzetközi mérkőzést 1969-ben Stockholmban játszották, ekkor a Svéd klubok mellett egy Norvég csapat is megfordult. 1980-as évektől kezdve egyre több ország kezdett el foglalkozni a sportággal, többek között Nagy-Britani, Kanada, Egyesült Államok, valamint Japán. A sportág 1994-es téli játékokon debütált, és hamar hatalmas szurkoló táborokat mozgatott meg.";


function sportagak(evszak){
    mappa=evszak;
    if (evszak=="nyari") {
        nyarisportagak.split(',').forEach(kiir);
    } else if(evszak=="teli") {
        telisportagak.split(',').forEach(kiir);
    }
}

function kiir(ertek, index, tomb){
    
    document.writeln("<img src='sportagkepek/"+mappa+"/p"+index+".png' onclick='megNez(\""+mappa+"\","+index+");' class='kispiktogram' alt='"+ertek+"' title='"+ertek+"'>");    
}

function megNez(evszak,index) {
    if (evszak=="nyari") {
        document.getElementById('leiras').innerHTML=nyariLeirasok[index]; 
        document.getElementById('evszak').innerHTML="Nyári paralimpiai sportág"; 
        document.getElementById('sportag').innerHTML=nyarisportagak.split(',')[index];
        document.getElementById('piktorgram').alt=nyarisportagak.split(',')[index];
        document.getElementById('piktorgram').title=nyarisportagak.split(',')[index];
    } else if (evszak=="teli") {
        document.getElementById('leiras').innerHTML=teliLeirasok[index]; 
        document.getElementById('evszak').innerHTML="Téli paralimpiai sportág"; 
        document.getElementById('sportag').innerHTML=telisportagak.split(',')[index];
        document.getElementById('piktorgram').alt=telisportagak.split(',')[index];
        document.getElementById('piktorgram').title=telisportagak.split(',')[index];
    }
    document.getElementById('piktorgram').src="sportagkepek/"+evszak+"/p"+index+".png";  
    
}