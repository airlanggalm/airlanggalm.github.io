var option1 = document.getElementById("zodiak1")
var option2 = document.getElementById("zodiak2")
var option3 = document.getElementById("zodiak3")
var option4 = document.getElementById("zodiak4")
var option5 = document.getElementById("zodiak5")
var option6 = document.getElementById("zodiak6")
var option7 = document.getElementById("zodiak7")
var option8 = document.getElementById("zodiak8")
var option9 = document.getElementById("zodiak9")
var option10 = document.getElementById("zodiak10")
var option11 = document.getElementById("zodiak11")
var option12 = document.getElementById("zodiak12")

var zodiak = document.getElementById("zodiak")
var gambarZodiak = document.getElementById("gambarZodiak")
var keteranganZodiak = document.getElementById("keteranganZodiak")
var index = 0
var tanggaLahir = ["21 Maret - 19 April", "20 April - 20 Mei", "21 Mei - 20 Juni", "21 Juni - 22 Juli", "23 Juli - 22 Agustus", "23 Agustus - 22 September", "23 September - 22 Oktober", "23 Oktober - 21 November", "22 November - 21 Desember", "22 Desember - 19 Januari", "20 Januari - 18 Februari", "19 Februari - 20 Maret"]
var output=[]

function getZodiak() {
  if (index >= tanggaLahir.length){
    option1.style.display = "none";
		option2.style.display = "none";
		option3.style.display = "none";
		option4.style.display = "none";
		option5.style.display = "none";
		option6.style.display = "none";
		option7.style.display = "none";
		option8.style.display = "none";
		option9.style.display = "none";
		option10.style.display = "none";
		option11.style.display = "none";
		option12.style.display = "none";

    if (output[0] == "21 Maret - 19 April") {
      zodiak.innerHTML = '<a href="https://id.wikipedia.org/wiki/Aries_(astrologi)">Zodiak Kamu Aries!</a>'
      document.getElementById("gambarZodiak").src = "https://upload.wikimedia.org/wikipedia/commons/6/69/Aries2.jpg"
      gambarZodiak.style.display = "block"
      keteranganZodiak.innerHTML = "<p>Aries diperintah oleh planet Mars (Bersama Skorpio). Elemen aries adalah api (Bersama Leo, Sagitarius), elemen yang menandai ambisi dan kekuatan fisik. Kualitas aries adalah kardinal (Bersama Kanser, Kaprikornus, Libra). Aries akan mengalami peninggian derajat apabila berada di Matahari, dan mengalami kejatuhan derajat apabila berada di planet Venus. Lawan dari aries, pada dasarnya adalah libra. Namun ada yang mengatakan bahwa lawan dari aries adalah leo.</p>"
      } else if (output[0] == "20 April - 20 Mei") {
        zodiak.innerHTML = '<a href="https://id.wikipedia.org/wiki/Taurus_(astrologi)">Zodiak Kamu Taurus!</a>'
        document.getElementById("gambarZodiak").src = "https://upload.wikimedia.org/wikipedia/commons/e/e7/Taurus2.jpg"
        gambarZodiak.style.display = "block"
        keteranganZodiak.innerHTML = "<p>Taurus adalah bintang kedua dari zodiak yang didirikan di era Mesopotamia kuno sebagai banteng surga, karena rasi bintang ini berada di antara matahari terbit pada vernal equinox. Karena presesi ekuinoks, sekarang menjadi Aries. Taurus merupakan zodiak yang mempunyai karakter berkemauan keras dengan segala kesabaran dan tekad. Di Mesir, Taurus dipandang sebagai dewi sapi Hathor. Hathor adalah dewi kecantikan, cinta, dan kebahagiaan, dan dia mewakili semua kekayaan pada ternak sebagai penyedia makanan. Astrologi Roman mengatakan Taurus diperintah oleh satu planet, yaitu Venus, tetapi ada juga yang mengatakan bahwa Taurus diperintah oleh dua planet, yaitu Venus dan Bumi, ini karena Taurus dianggap lebih berfokus kepada gairah kehidupan daripada cinta dan seni dan beberapa orang beranggapan bahwa Venus lebih berpihak ke Libra dibandingkan Taurus. Elemen Taurus adalah tanah (Bersama Virgo dan Kaprikornus), elemen yang menandai kesetiaan, perdamaian dan posesif. Kualitas Taurus adalah tetap (bersama Skorpio, Leo dan Akuarius). Peninggian derajat Taurus akan terjadi apabila Taurus berada di bulan. Sementara Taurus akan mengalami kejatuhan derajat apabila Taurus berada di planet Uranus atau Pluto. Lawan dari Taurus adalah Skorpio. Polaritas Taurus adalah negatif (bersama semua zodiak berelemen tanah dan air).</p>"
      } else if (output[0] == "21 Mei - 20 Juni") {
        zodiak.innerHTML = '<a href="https://id.wikipedia.org/wiki/Gemini_(astrologi)">Zodiak Kamu Gemini!</a>'
        document.getElementById("gambarZodiak").src = "https://upload.wikimedia.org/wikipedia/commons/b/be/Gemini2.jpg"
        gambarZodiak.style.display = "block"
        keteranganZodiak.innerHTML = "<p>Gemini (♊) adalah zodiak ketiga yang berasal dari konstelasi Gemini. Di bawah zodiak tropis, matahari transit tanda ini antara 21 Mei dan 21 Juni. Gemini diwakili oleh si Kembar Castor dan Pollux. simbol kembar ini didasarkan pada Dioscuri, dua manusia yang diberikan bersama kekuatan dewa setelah kematian mereka.</p>"
      } else if (output[0] == "21 Juni - 22 Juli") {
        zodiak.innerHTML = '<a href="https://id.wikipedia.org/wiki/Kanser_(astrologi)">Zodiak Kamu Cancer!</a>'
        document.getElementById("gambarZodiak").src = "https://upload.wikimedia.org/wikipedia/commons/7/71/Suppl%C3%A9ment_turc._242%2C_fol._14v_-_Osman%2C_Cancer_1582_crop.png"
        gambarZodiak.style.display = "block"
        keteranganZodiak.innerHTML = "<p>Dalam astrologi, Kanser adalah zodiak kardinal dari elemen air, yang terdiri dari Kanser, Pises, dan Skorpio. Zodiak ini berenergi negatif, dan berdomisil di planet Bulan. Kanser berbentuk kepiting, berdasarkan Karkinos, kepiting raksasa yang dilecehkan Heracles selama pertarungannya dengan Hydra.</p>"
      } else if (output[0] == "23 Juli - 22 Agustus") {
        zodiak.innerHTML = '<a href="https://id.wikipedia.org/wiki/Leo_(astrologi)">Zodiak Kamu Leo!</a>'
        document.getElementById("gambarZodiak").src = "https://upload.wikimedia.org/wikipedia/commons/2/2f/Leo2.jpg"
        gambarZodiak.style.display = "block"
        keteranganZodiak.innerHTML = "<p>Leo adalah tanda tetap bersama dengan Taurus, Skorpio, dan Akuarius. Di bawah zodiak tropis, Matahari transit antara 23 Juli sampai 22 Agustus setiap tahun, dan di bawah zodiak sideris, Matahari saat ini transit sekitar 16 Agustus sampai 15 September. Lambang singa didasarkan pada singa Nemean, seekor singa dengan kulit yang tidak bisa ditembus. Tanda ini adalah tanda utara dan tanda selatannya yang berlawanan adalah Akuarius. Leo adalah tanda Api, bersama Aries dan Sagitarius. Leo biasanya paling cocok dengan tanda lawan Akuarius dan lainnya seperti Skorpio dan Taurus. Leo kurang cocok dengan Pises dan Virgo dan dalam hal persahabatan Leo cocok bersama Kaprikornus dan Taurus.</p>"
      } else if (output[0] == "23 Agustus - 22 September") {
        zodiak.innerHTML = '<a href="https://id.wikipedia.org/wiki/Virgo_(astrologi)">Zodiak Kamu Virgo!</a>'
        document.getElementById("gambarZodiak").src = "https://upload.wikimedia.org/wikipedia/commons/f/f8/Virgo2.jpg"
        gambarZodiak.style.display = "block"
        keteranganZodiak.innerHTML = "<p>Virgo (♍) (Yunani: Παρθένος, Parthenos) adalah tanda astrologi keenam dalam Zodiak. Tanda ini mencakup 150-180 derajat zodiak. Di bawah zodiak tropis, Matahari transit area ini rata-rata antara 23 Agustus dan 22 September, dan Matahari transit rasi bintang Virgo dari sekitar 16 September hingga 30 Oktober.</p>"
      } else if (output[0] == "23 September - 22 Oktober") {
        zodiak.innerHTML = '<a href="https://id.wikipedia.org/wiki/Libra_(astrologi)">Zodiak Kamu Libra!</a>'
        document.getElementById("gambarZodiak").src = "https://upload.wikimedia.org/wikipedia/commons/4/46/Libra2.jpg"
        gambarZodiak.style.display = "block"
        keteranganZodiak.innerHTML = "<p>Libra (♎) adalah zodiak ketujuh. Zodiak ini mencakup 180°–210° garis bujur Pada zodiak tropis, matahari transit zodiak ini pada tanggal 23 September dan 23 Oktober, dan pada zodiak sideris, matahari berada di konstelasi ini dari 31 Oktober hingga 22 November. Simbol timbangan pada zodiak ini didasari dari Scales of Justice yang dipegang oleh Themis, penjelmaan hukum dari Yunani. Dia menjadi inspirasi modern wanita hukum. Planet yang menaungi Libra adalah Venus. Libra adalah zodiak satu-satunya yang digambarkan dengan objek yang tidak hidup. Zodiak lainnya digambarkan dengan hewan atau makhluk mitologi.</p>"
      } else if (output[0] == "23 Oktober - 21 November") {
        zodiak.innerHTML = '<a href="https://id.wikipedia.org/wiki/Skorpio_(astrologi)">Zodiak Kamu Scorpio!</a>'
        document.getElementById("gambarZodiak").src = "https://upload.wikimedia.org/wikipedia/commons/5/57/Scorpio2.jpg"
        gambarZodiak.style.display = "block"
        keteranganZodiak.innerHTML = "<p>Skorpio diperintah oleh planet Pluto (Utama) dan Mars (Kedua). Elemen skorpio adalah air, elemen yang menandai perasaan. Kualitas skorpio adalah tetap (Bersama Taurus, Leo, Akuarius). Peninggian skorpio akan terjadi apabila skorpio berada di Uranus. Sementara skorpio akan mengalami kejatuhan derajat apabila skorpio berada di planet Venus, Fortune (Bumi) dan Bulan. Lawan dari skorpio adalah taurus.</p>"
      } else if (output[0] == "22 November - 21 Desember") {
				zodiak.innerHTML = '<a href="https://id.wikipedia.org/wiki/Sagitarius_(astrologi)">Zodiak Kamu Sagitarius!</a>'
				document.getElementById("gambarZodiak").src = "https://upload.wikimedia.org/wikipedia/commons/6/6a/Sagittarius2.jpg"
				gambarZodiak.style.display = "block"
				keteranganZodiak.innerHTML = "<p>Sagitarius diperintah oleh planet Jupiter. Elemen sagitarius adalah api (bersama Aries, Leo), elemen yang menandai ambisi dan kekuatan fisik. Kualitas sagitarius adalah berubah-ubah (Bersama Gemini, Virgo, Pises). Sagitarius akan mengalami kerugian apabila berada di planet Merkurius. Lawan dari Sagitarius adalah Gemini.</p>"
			} else if (output[0] == "22 Desember - 19 Januari") {
				zodiak.innerHTML = '<a href="https://id.wikipedia.org/wiki/Kaprikornus_(astrologi)">Zodiak Kamu Capricorn!</a>'
				document.getElementById("gambarZodiak").src = "https://upload.wikimedia.org/wikipedia/commons/c/c1/RR5110-0045R.gif"
				gambarZodiak.style.display = "block"
				keteranganZodiak.innerHTML = "<p>Kaprikornus (♑) adalah astrologi kesepuluh dalam zodiak dari dua belas rasi zodiak, yang berasal dari rasi bintang Kaprikornus, kambing bertanduk. Ini membentang 270-300 derajat zodiak, sesuai dengan bujur langit. Di bawah zodiak tropis, matahari mentransmisikan daerah ini dari sekitar 21 Desember hingga 21 Januari tahun berikutnya, dan di bawah zodiak sidereal, matahari mentransmisikan rasi Bintang Kaprikornus dari sekitar 16 Januari hingga 16 Februari. Dalam astrologi, Kaprikornus dianggap sebagai tanda bumi, tanda negatif, dan salah satu dari empat tanda kardinal. Kaprikornus dikatakan dikuasai oleh planet Saturnus. Dalam Vedic Astrology Kaprikornus dikaitkan dengan Buaya tetapi astrolog modern menganggap Kaprikonus sebagai kambing laut. Simbolnya didasarkan pada dewa kebijaksanaan dan air primordial Sumeria, Enki, dengan kepala dan tubuh atas seekor kambing dan tubuh bagian bawah dan ekor ikan. Kemudian dikenal sebagai Ea dalam mitologi Akkadian dan Babilonia, Enki adalah dewa kecerdasan (gestu, secara harfiah 'telinga'), penciptaan, kerajinan; sihir; air, air laut dan air danau.</p>"
			} else if (output[0] == "20 Januari - 18 Februari") {
				zodiak.innerHTML = '<a href="https://id.wikipedia.org/wiki/Akuarius_(astrologi)">Zodiak Kamu Aquarius!</a>'
				document.getElementById("gambarZodiak").src = "https://upload.wikimedia.org/wikipedia/commons/c/c8/Aquarius2.jpg"
				gambarZodiak.style.display = "block"
				keteranganZodiak.innerHTML = "<p>Akuarius (♒) adalah zodiak kesebelas dari dua belas tanda-tanda zodiak astrologi dan itu berasal dari konstelasi yang mempunyai nama yang sama, yaitu konstelasi Akuarius.Individu yang lahir ketika matahari berada di tanda ini dikenal sebagai individu Akuarius. Akuarius dianggap sebagai zodiak maskulin oleh astrolog kuno dan itu dijajah oleh planet Saturnus, tetapi planet Uranus dikatakan merupakan penjaga nyata Akuarius oleh sejumlah ahli astrologi modern. Nama Sanskerta bagi Akuarius dalam astrologi Hindu ialah Kuṃbha.</p>"
			} else if (output[0] == "19 Februari - 20 Maret") {
				zodiak.innerHTML = '<a href="https://id.wikipedia.org/wiki/Pises_(astrologi)">Zodiak Kamu Pisces!</a>'
				document.getElementById("gambarZodiak").src = "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Symbole_du_signe_astrologique_des_poissons.png/600px-Symbole_du_signe_astrologique_des_poissons.png"
				gambarZodiak.style.display = "block"
				keteranganZodiak.innerHTML = "<p>Pises (♓️) (/ˈpaɪsiːz/;bahasa Yunani Kuno: Ἰχθύες Ikhthyes) adalah tanda astrologi kedua belas dalam zodiak. Tanda ini adalah tanda negatif yang berubah-ubah. Zodiak ini mencakup 330° hingga 360° bujur langit. Pada zodiak tropis, matahari transit di daerah ini antara 19 Februari sampai 20 Maret. Pada astrologi sideris, Matahari transit di konstelasi Pises dari sekitar 12 Maret hingga 18 April. Dalam interpretasi klasik, simbol ikan berasal dari Ichthyocentaurs, yang membantu Aphrodite ketika dia dilahirkan dari laut. Menurut beberapa ahli astrologi tropis, zaman astrologi saat ini adalah zaman Pises, sementara yang lain berpendapat bahwa itu adalah zaman Akuarius.</p>"
			}
        
  } else {
    
		zodiak.innerHTML = "Pilih Tanggal Lahir"
    // pilihan tanggal lahir
    option1.innerHTML = tanggaLahir[0]
    option2.innerHTML = tanggaLahir[1]
    option3.innerHTML = tanggaLahir[2]
    option4.innerHTML = tanggaLahir[3]
    option5.innerHTML = tanggaLahir[4]
    option6.innerHTML = tanggaLahir[5]
    option7.innerHTML = tanggaLahir[6]
    option8.innerHTML = tanggaLahir[7]
    option9.innerHTML = tanggaLahir[8]
    option10.innerHTML = tanggaLahir[9]
    option11.innerHTML = tanggaLahir[10]
		option12.innerHTML = tanggaLahir[11]
		// gambar tidak ditampilkan
    gambarZodiak.style.display = "none"
  }
	console.log(output)
  console.log(index)
}

function optionChoosen1(){
	output.push(tanggaLahir[0])
	index +=13
	getZodiak()
}

function optionChoosen2(){
	output.push(tanggaLahir[1])
	index +=13
	getZodiak()
}

function optionChoosen3(){
	output.push(tanggaLahir[2])
	index +=13
	getZodiak()
}

function optionChoosen4(){
	output.push(tanggaLahir[3])
	index +=13
	getZodiak()
}

function optionChoosen5(){
	output.push(tanggaLahir[4])
	index +=13
	getZodiak()
}

function optionChoosen6(){
	output.push(tanggaLahir[5])
	index +=13
	getZodiak()
}

function optionChoosen7(){
	output.push(tanggaLahir[6])
	index +=13
	getZodiak()
}

function optionChoosen8(){
	output.push(tanggaLahir[7])
	index +=13
	getZodiak()
}

function optionChoosen9(){
	output.push(tanggaLahir[8])
	index +=13
	getZodiak()
}

function optionChoosen10(){
	output.push(tanggaLahir[9])
	index +=13
	getZodiak()
}

function optionChoosen11(){
	output.push(tanggaLahir[10])
	index +=13
	getZodiak()
}

function optionChoosen12(){
	output.push(tanggaLahir[11])
	index +=13
	getZodiak()
}

function pressButton() {
  console.log("pressed")
}