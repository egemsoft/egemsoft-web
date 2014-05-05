- - -
##Veri Analiz ve Raporlama 

- **Temel Gereksinimler:** 


    - DPI şebekesindeki raporlanacak veri çok büyük (aylık ~ 150 TB). Ölçeklenebilirlik çok önemli   
    - Özel İşlem Gerektiren DPI Raporları  
        - com.tr, edu.tr, gov.tr gibi kök alan adlarına yönelik raporlar alınabilmeli (metin işleme)  
        - Aynı organizasyona ait farklı alan adları gruplanarak raporlanabilmeli (facebook.com - fb.com...)  
        - Alan adları, kategorilerine göre gruplanarak raporlanabilmeli (sosyal medya, oyun, video vs.)  
    - Raporlar yüksek performansla oluşturulabilmeli  
        - Veri analizi yapan çalışanların üretkenliğini olumsuz etkilemeyecek şekilde, farklı soruların cevaplarını çok beklemeden verebilmeli  
    - DSL şebekesi üzerinde farklı birimler tanım yapabilmekte  
        - Şebekedeki hareketin anlaşılması sadece farklı kaynaklarda oluşmuş kayıtların birlikte değerlendirilmesiyle mümkün. Bu kaynakların ürettiği kayıt formatları çok çeşitli  
    - Şebeke üzerindeki işlem kayıtlarının geriye dönük olarak tutulup, analiz edilebilmesi gerekmekte  
    - DSL şebekesi üzerinde yapılan ıslah çalışmalarının etkilerinin analizi gerekmekte  
    - Müşteri deneyiminin bir bütün olarak DSL üretici firmalarının üzerinde raporlanabilmesi gerekmekte  
    - Şebeke planlamasına katkıda bulunabilecek çeşitli raporlara ihtiyaç duyulmakta  
    

- **İş Akışı:** 

    -  Verinin Sisteme Alınması  
        -  Çeşitli veri kaynaklarından toplanması gereken verinin, belirli saatlerde, otomatik olarak sisteme aktarılması (DB – View, FTP ile dosya transferi vs.)  
    -  Verinin Analizi ve Raporlanması  
        -  Farklı kaynaklardan toplanan verilerin hazırlanan scriptler aracılığıyla ilişkilendirilmesi  
        -  Hazırlanması istenen raporların oluşturulması için, ilişkilendirilmiş veri üzerinde çalışacak gerekli scriptlerin hazırlanması  
        -  Scriptlerin çalışması neticesinde oluşacak raporların PDF, XLS formatlarında dış ortama aktarılması, raporların E-posta yolu ile ilgili kişilere gönderilmesinin sağlanması  
        -  Harici BI araçlarıyla entegrasyon sağlanabilmesi  
        -  Geçmişe dönük trend analizinin sağlanması 

- **Veri Kaynakları:**  

Rapor Örnekleri:
Ağ Analizi:
	Abonelerin Hızlarına Göre Dağılımları
	Müşterilerin deneyimlediği hızların gruplanması
	0-2 Mbit Aralığına Düşen ve 0-2 Mbit Aralığından Çıkan Abonelerin İncelenmesi
	0-2 Mbit aralığına nasıl ve neden düşüldüğünün belirlenilmeye çalışılması
	Sürekli 0-2 Aralığında Kalan Abonelerin Tespiti
	Sürekli ya da belli bir zaman aralığında okunan tüm hız değerleri 0-2 aralığında olan abonelerin incelenmesi
	Abonelerin Profil Bazında İncelenmesi
	DSLAM profillerinin olası problemlerinin tespitine yönelik çalışma
	Islah Çalışmalarının Sonuçlarının İncelenmesi
	Sahaya gönderilen ıslah iş emirlerinin geri dönüşlerinin ve etkilerinin incelenmesi

DPI Raporlama:
	Trafiği link ve servis bazında inceleyen raporlar
	Trafiği kök alan adı (domain adından sonraki uzantı kısmı .com, .com.tr, .edu.tr gibi) bazında inceleyen çalışmalar
	Trafiği alan adı kategorisi (URL kategorileri - haber, oyun, sosyal medya vs.) bazında inceleyen çalışmalar
	Raporların tüm DPI cihazlarını destekleyecek şekilde, tüm şebeke verisi üzerinden geçmişe yönelik olarak çalıştırılabilmesi
