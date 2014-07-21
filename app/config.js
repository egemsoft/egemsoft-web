"use strict";

/**
 * Egem web app config module
 * $config provider to serve configuration variables
 * @author Ismail Demirbilek
 */
angular.module("egem.config", []).
	factory("$config", [
	  function() {
	  	var staticUrl = 'static';
	  	var uploadsUrl = staticUrl + '/uploads';
	  	return {
	  		staticUrl: staticUrl,
	  		// edit here to configure sections (pages), there should be a section-name.html file
		  	sections: ['about','services','contact'],
		  	// edit here to configure section source directory e.g. /content/about.html
		  	contentSrc: 'content/',

		  	// home, motto, etc.
		  	home: {
		  		slideInterval: 10000,
		  		blocksPerSlide: 3,
		  		blocksSlideInterval: 0, // Do not auto rotate
		  		// English content slider
		  		en: {
			  		slides: [
			  			{
			  				title: 'Big Data Platform and Applications',
			  				text: 'Big data, as the name recalls, is usually interpreted as the datasets that are too large, growing at a high speed and emerging from various resources with different structures. Egemsoft has determined big data technologies as the strategic platform for the research and application development activities.',
							image: uploadsUrl + '/slide-bigdata.png',
			  				link: '#page/big-data-platform-and-applications'
			  			},
			  			{
			  				title: 'Corporate Application Development and System Integration',
			  				text: 'Institutions focused on ultimate success, prefer custom developed applications that will differentiate them from their competitors and create competitive advantage.  Egemsoft, with its highly skilled software engineers, provides application development and system integration services which seamlesşy connect complex systems.',
							image: uploadsUrl + '/slide-integration.png',
			  				link: '#page/corporate-application-development-and-system-integration'
			  			},
			  			{
			  				title: 'Software Testing Services',
			  				text: 'Software test services are one of the most important phases in application development projects. It is the phase which actually defines the quality of the end product. Despite these facts, test phase has always been the one with inadequate durations assigned, even skipped due to strict project timetables and unfortunately, sometimes regarded as a high, unnecessary cost function.',
							image: uploadsUrl + '/slide-test.png',
			  				link: '#page/software-testing-services'
			  			}
			  		],
			  		blocks: [
			  			{
			  				title: 'MARS',
			  				text: 'There is no doubt that e-mails are one of the crucial and most commonly used means of communication, whether among individuals for social purposes or  for business needs among professionals, user groups, companies, with a worldwide reach. An e-mail not only conveys textual information but any type of media as attachments.',
							image: uploadsUrl + '/block-mars.png',
			  				link: '#/page/mars-email-archive-system'
			  			},
			  			{
<<<<<<< HEAD
			  				title: 'Veri Analiz',
			  				text: 'Karmaşık iletişim şebekelerinde yapılacak her türlü müdahalenin çok çeşitli etkileri olabilir. Bu tespitten haraketle geliştirilen veri analizi çözümümüz, farklı şebeke cihazlarından verileri toplamakta, birbirleri ile ilişkilendirmekte ve istendiğinde trendin de izlenebildiği çok çeşitli analiz olanaklarını sunmaktadır.',
								image: uploadsUrl + '/block-reporting.png',
			  				link: '#/page/data-analysis-and-reporting'
			  			},
			  			{
			  				title: 'Log Analiz',
			  				text: 'Günümüzde iletişim şebekeleri, sürekli bilgi üreten çok akıllı cihazlardan oluşmaktadır. Log Analiz Aracımız, üretilen bu bilgilerin toplandığı, geçmiş ile ilişkilendirilerek analizlerin yapıldığı ve belirli kurallar çerçevesinde ilgililerin uyarılarak şebekelerin sağlıklı ve verimli çalışmasını sağlayan bir uygulamadır.',
								image: uploadsUrl + '/block-logger.png',
=======
			  				title: 'Customer Experience Management',
			  				text: 'Every intervention on complex communication networks have different impacts. Data Analysis and Reporting solution has been developed to analyse such impacts. It collects data from various network devices, correlates such data and provides the tools for analysis including trend analysis which utilises historic data.',
							image: uploadsUrl + '/block-ipam.png',
			  				link: '#/page/data-analysis-and-reporting'
			  			},
			  			{
			  				title: 'Log Analysis',
			  				text: 'Communication networks have various smart devices producing data continously. Log Analysis Tool collects such data, correlates and compares with related historic data. Based on specified rules, it creates alerts for the responsible units, for a healty and effective network generation.',
							image: uploadsUrl + '/block-quota.png',
>>>>>>> 790d7e8... config.js edited online with Bitbucket
			  				link: '#/page/log-analysis-tool'
			  			},
			  			{
			  				title: 'IPAM',
			  				text: 'IP Addresses are one of the limited resources for the telecom operators. Every telco institution should give utmost care to manage these resources effectively. IP Address Management solution provides the tools for this critical management process.',
							image: uploadsUrl + '/block-ipam.png',
			  				link: '#/page/ipam-ip-management-system'
			  			},
			  			{
			  				title: 'Quota Reporting',
			  				text: 'Today telecom companies apply various methods when producing the invoices for their clients. One such kind is the “Pay as mufor vch as you utilise”. Quota Reporting solution analysis the detailed call records created by the devices used by the subscribers and collect the necessary information for invoice production.',
							image: uploadsUrl + '/block-quota.png',
			  				link: '#/page/quota-reporting-system'
			  			},
			  			{
<<<<<<< HEAD
			  				title: 'Modem Arıza Tespit',
			  				text: 'Internet servis sağlayıcı kurumların müşteri memnuniyetini yüksek tutabilmeleri, olası müşteri veya cihaz, hat kaynaklı sorunları kısa sürede çözmeleri ile doğru orantılıdır. Egemsoft tarafından geliştirilen Modem Arıza Tespit Platformu, belirtilen sorunlara yönelik geliştirilen iki temel uygulamayı içermektedir.',
								image: uploadsUrl + '/block-mat.png',
=======
			  				title: 'Modem Defect Detection',
			  				text: 'Internet service providers are obliged to solve problems their clients face, whether it is a defect of a modem, a line failure or fault of subscriber, faster than their competitors, in order to maintain customer satisfaction and reduce churn. Modem Defect Detection Platform, developed by Egemsoft, offers two main applications that address these problems.',
							image: uploadsUrl + '/block-quota.png',
>>>>>>> 790d7e8... config.js edited online with Bitbucket
			  				link: '#/page/modem-defects-detecting-platform'
			  			}
			  		]
			  	},
		  		// Turkish content slider
			  	tr: {
			  		slides: [
			  			{
			  				title: 'Büyük Veri Platformu ve Uygulamaları',
			  				text: 'Büyük Veri kavramı, adından da anlaşılacağı gibi, temelde yüksek yoğunlukta, hızla büyüyen ve kaynakları çok çeşitlilik gösteren karmaşık veri yapılarını tariflemektedir. Egemsoft, büyük veri teknolojileri platformunu, stratejik araştırma ve ürün geliştirme alanı olarak belirlemiştir.',
								image: uploadsUrl + '/slide-bigdata.png',
			  				link: '#page/big-data-platform-and-applications'
			  			},
			  			{
			  				title: 'Kurumsal Uygulama Geliştirme ve Sistem Entegrasyonu',
			  				text: 'Başarı odaklı kurumlar, faaliyetlerini rakiplerinden ayrıştıracak, kendilerine rekabet avantajı yaratacak kurumlarına özel geliştirilen uygulamaları tercih etmektedir. Egemsoft, barındırdığı yüksek yetkinlikteki yazılım mühendisleri ile uygulama geliştirme çalışmalarının yanında karmaşık sistemlerin bütünsel olarak çalışmasını sağlayan sistem entegrasyon hizmetini de vermektedir.',
								image: uploadsUrl + '/slide-integration.png',
			  				link: '#page/corporate-application-development-and-system-integration'
			  			},
			  			{
			  				title: 'Yazılım Test Hizmetleri',
			  				text: 'Uygulama yazılımı geliştirme süreçlerinde test aşaması, öneminin bilinmesine karşın, genellikle en az sürenin verildiği, zaman sıkışıklığı öne sürülerek tamamlanmasına gerek duyulmayan, hatta proje maliyetini yukarı çeken bir işlev olarak da görülmüştür. Bu yanlış yaklaşımla gerçekleştirilmeye çalışılan projeler ise başarısız, öngörülenden çok daha uzun süren ve çok daha yüksek maliyetlerle sonuçlanmıştır.',
								image: uploadsUrl + '/slide-test.png',
			  				link: '#page/software-testing-services'
			  			}
			  		],
			  		blocks: [
			  			{
			  				title: 'MARS',
			  				text: 'Günümüzde en yaygın iletişim aracı olarak kullanılan e-posta uygulaması, kullanım yoğunluğu ve erişim ihtiyacının sürekli artması gibi faktörlerin sonucu olarak, alınan ve gönderilen e-postaların saklanması ve arşivlenmesi gibi gereksinimleri de beraberinde getirmektedir. Bu ihtiyaç genellikle kurum çalışanlarının kendi inisiyatifleri ile yine kendi PC’lerinde yarattıkları arşivler yolu ile giderilmeye çalışılmaktadır. Ancak, kişisel ortamlarda saklanan bu bilgiler, bilgiyi arşivleyen kişinin kullanımını ile sınırlı olmaktadır. İlgili kişilerin kurumdan ayrılması ve/veya kurumun herhangi bir neden ile bu kişisel ortamlarda saklanan bilgiye ihtiyaç duyması halinde, genellikle bu bilgilere ulaşım imkanı olmamaktadır.',
								image: uploadsUrl + '/block-mars.png',
			  				link: '#/page/mars-email-archive-system'
			  			},
			  			{
			  				title: 'Müşteri Deneyimi Yönetimi',
			  				text: 'Karmaşık iletişim şebekelerinde yapılacak her türlü müdahalenin çok çeşitli etkileri olabilir. Bu tespitten haraketle geliştirilen veri analizi çözümümüz, farklı şebeke cihazlarından verileri toplamakta, birbirleri ile ilişkilendirmekte ve istendiğinde trendin de izlenebildiği çok çeşitli analiz olanaklarını sunmaktadır.',
								image: uploadsUrl + '/block-reporting.png',
			  				link: '#/page/data-analysis-and-reporting'
			  			},
			  			{
			  				title: 'Log Analiz',
			  				text: 'Günümüzde iletişim şebekeleri, sürekli bilgi üreten çok akıllı cihazlardan oluşmaktadır. Log Analiz Aracımız, üretilen bu bilgilerin toplandığı, geçmiş ile ilişkilendirilerek analizlerin yapıldığı ve belirli kurallar çerçevesinde ilgililerin uyarılarak şebekelerin sağlıklı ve verimli çalışmasını sağlayan bir uygulamadır.',
								image: uploadsUrl + '/block-logger.png',
			  				link: '#/page/log-analysis-tool'
			  			},
			  			{
			  				title: 'IPAM',
			  				text: 'Telekom operatörlerinin kıt kaynaklarından biri de IP adresleridir. Kurumlar açısından bu kaynağı yüksek verimlilikle yönetebilmek son derece önemlidir. IP Adres Yönetimi çözümümüz, kurumların bu hedefi gerçekleştirebilmesini sağlayan yetenekli bir yazılım uygulamasıdır.',
								image: uploadsUrl + '/block-ipam.png',
			  				link: '#/page/ipam-ip-management-system'
			  			},
			  			{
			  				title: 'Kota Raporlama',
			  				text: 'Günümüz telekomünikasyon şebekelerinde çeşitli yöntemler ile kullanım hizmet faturası üretmek mümkündür. Bu yöntemlerden biri de "Kullandığın Kadar Öde" şeklinde olabilir. Kota Raporlama çözümümüz, kullanıcıların cihazlarının ürettiği detaylı çağrı raporlarını inceleyen, fatura üretimine yönelik bilgileri toplayan bir uygulamadır.',
								image: uploadsUrl + '/block-quota.png',
			  				link: '#/page/quota-reporting-system'
			  			},
			  			{
			  				title: 'Modem Arıza Tespit',
			  				text: 'Internet servis sağlayıcı kurumların müşteri memnuniyetini yüksek tutabilmeleri, olası müşteri veya cihaz, hat kaynaklı sorunları kısa sürede çözmeleri ile doğru orantılıdır. Egemsoft tarafından geliştirilen Modem Arıza Tespit Platformu, belirtilen sorunlara yönelik geliştirilen iki temel uygulamayı içermektedir.',
								image: uploadsUrl + '/block-mat.png',
			  				link: '#/page/modem-defects-detecting-platform'
			  			}
			  		]
			  	}
		  	}
		  };
	  }]);
