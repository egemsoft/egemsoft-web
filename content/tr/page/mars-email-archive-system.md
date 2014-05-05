- - -
##MARS - E-Posta Arşivleme Sistemi

Günümüzde en yaygın iletişim aracı olarak kullanılan e-posta uygulaması, kullanım yoğunluğu ve erişim ihtiyacının sürekli artması gibi faktörlerin sonucu olarak, alınan ve gönderilen e-postaların saklanması ve arşivlenmesi gibi gereksinimleri de beraberinde getirmektedir. Bu ihtiyaç genellikle kurum çalışanlarının kendi inisiyatifleri ile yine kendi PC’lerinde yarattıkları arşivler yolu ile giderilmeye çalışılmaktadır. Ancak, kişisel ortamlarda saklanan bu bilgiler, bilgiyi arşivleyen kişinin kullanımını ile sınırlı olmaktadır. İlgili kişilerin kurumdan ayrılması ve/veya kurumun herhangi bir neden ile bu kişisel ortamlarda saklanan bilgiye ihtiyaç duyması halinde, genellikle bu bilgilere ulaşım imkanı olmamaktadır.

Günümüzde, özellikle Finans, Telekom ve Enerji alanlarında, sektörel Denetleme ve Düzenleme Kurumları da, sektör firmalarının yürüttükleri faaliyetlerde gerekli şeffaflığın temini adına, firma ve paydaşları ile yapılan her türlü elektronik haberleşme bilgilerinin de anında ulaşılabilir bir şekilde saklanmasını talep etmektedirler. Bu ihtiyaca cevap verebilmek adına çeşitli çözümler piyasada oluşmaktadır. Ancak önerilen Yurtdışı menşeli çözümler genellikle, kullanılan teknolojilerin gereği, yüksek maliyetli donanım altyapısına ihtiyaç duymaktadır.

Bu tespitlerle başlatılan çalışmalar sonunda, Hadoop temelli dosya sistemleri ve veri saklama teknolojileri kullanılarak MARS - E-Posta Arşivleme Sistemi geliştirilmiştir.

**Temel İşlevler:**

**Mimari Yapı:**  

[[[[[[[[MARS_MimariYapı]]]]]]

- **Toplama:**  
	- Tüm Microsoft Exchange sürümlerinde üretilen E-postalar  
	- POP3 ve IMAP kullanan tüm sağlayıcıların ürettiği e-postalar  
	- PST e-posta arşiv dosyaları  
	- Active Directory veya LDAP’dan kullanıcı ve rol tanımları

- **Yönetim:**  
	- Yasal uyumluluk için veri tutarlılığının garanti edilmesi  
	- Erişim kuralları ile veri güvenliğinin sağlanması  
	- Kullanıcı grup/profilleri bazında arşivleme zaman planlaması  

- **Analiz:**  
	- Kurum içi e-posta kullanım eğilimlerine ilişkin detay bilgi üretilmesi  
	- Metin Madenciliği gibi derinlemesine analiz olanağı  
	- Belirlenmiş, uyarı yaratacak anahtar kelimeler bazında e-postaların taranması ve sonuçların raporlanması  

- **Erişim:**  
	- Microsoft Outlook E-posta istemcisinden gerçek zamanlı erişim  
	- Posta kutusunda kısa yollar kullanarak arşivlenmiş postalara erişim  
	- Posta alanları (kime, kimden, dikkatine, konu, mesaj metni, ekli dosya isimleri, ekli dosya içeriği) üzerinde tam metin arama, sorgulama  
	- Web üzerinden erişim  

**Genel Özellikler:**

- Sınırsız Kapasiteli Kullanıcı Posta Kutusu  
- Düzenleyici Kurum Yönetmeliklerine Uygunluk İçin Yardımcı  
- Ölçeklenebilir Kapasite ve Yüksek Performans  
- Veri Tekilleştirme & Sıkıştırma  
- Jurnal Posta Kutusu Üzerinden Arşivleme  
- Zamanlanmış E-Posta Arşivleme (Outlook Eklentisi üzerinden ya da sistem tarafından)  
- LDAP Entegrasyonu ve Kullanıcı Grubu Temelli Arşivleme Politikaları  

**Kullanıcı Deneyimi:**  

- Otomatik ya da Elle E-Posta Arşivleme ve Arşivden Elle Geri Yükleme  
- Outlook Eklentisi ile Değişmeyen Kullanıcı Deneyimi  
- Tam Metin Arama (Gönderen, Gönderilen, Konu, Mesaj İçeriği, Ekli Dosya Adı, Ekli Dosya İçeriği)  
- Web Tabanlı Arşiv Posta Kutusu Arayüzü  
- Web/Outlook/Mobil İstemciler üzerinde görüntülenebilen arşivlenmiş e-posta kısayolları üzerinden orijinal e-posta erişimi  
- PST Dosyalarının Arşive Eklenebilmesi  
- Çevrimdışı Arşiv Erişimi: Outlook’ta arşivlenmiş e-postaların tutulabilmesi  

**Yönetici Deneyimi:**  

- Arşivlenmiş E-Posta Verisinin Yedeklenebilmesi  
- Coğrafi Yedeklilik  
- Veri Bütünlüğü Kontrolü İçin Araçlar  
- Yönetim ve İzleme Araçları  
- Data Export (PST & HTML)  
- Belirlenmiş Listeler için E-Posta Arşivlememe Özelliği  
- Arşivlenmiş E-Posta’lar için Silme Politikaları  

