"use strict";

/**
 * Egem web app config module
 * $config provider to serve configuration variables
 * @author Ismail Demirbilek
 */
angular.module("egem.config", []).
	factory("$config", [
	  function() {
	  	var staticUrl = 'http://' + window.location.host + '/static';
	  	var uploadsUrl = staticUrl + '/uploads';
	  	return {
	  		staticUrl: staticUrl,
	  		// edit here to configure sections (pages), there should be a section-name.html file
		  	sections: ['about','services','contact'],
		  	// edit here to configure section source directory e.g. /content/about.html
		  	contentSrc: '/content/',

		  	// home, motto, etc.
		  	home: {
		  		slideInterval: 10000,
		  		blocksPerSlide: 3,
		  		blocksSlideInterval: -1, // Do not auto rotate
		  		// English content slider
		  		en: {
			  		slides: [
			  			{
			  				title: 'Big Data Platform and Applications',
			  				text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce massa tellus, adipiscing nec condimentum at, aliquam egestas enim. Curabitur in leo at dui eleifend fringilla. Duis varius ante vel rhoncus lobortis. Etiam sed elit eget massa congue blandit vitae vitae nibh. In tincidunt risus non enim lacinia lacinia. Nam eget pellentesque odio, ut venenatis ipsum. Curabitur blandit lectus id nunc aliquet, at elementum nisl luctus. Maecenas tincidunt, arcu at vehicula malesuada, ante neque tristique ipsum, in porttitor orci tellus id ante. Maecenas ut commodo justo. Curabitur at elit nisl. Sed elementum ligula enim, elementum vestibulum metus convallis vel. Vestibulum facilisis, erat et bibendum vulputate, felis neque blandit lectus, quis rutrum massa ante et leo. Ut sit amet semper eros.',
			  				image: uploadsUrl + '/slide-bigdata.png',
			  				link: '#page/big-data-platform-and-applications'
			  			},
			  			{
			  				title: 'Corporate Application Development and System Integration',
			  				text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce massa tellus, adipiscing nec condimentum at, aliquam egestas enim. Curabitur in leo at dui eleifend fringilla. Duis varius ante vel rhoncus lobortis. Etiam sed elit eget massa congue blandit vitae vitae nibh. In tincidunt risus non enim lacinia lacinia. Nam eget pellentesque odio, ut venenatis ipsum. Curabitur blandit lectus id nunc aliquet, at elementum nisl luctus. Maecenas tincidunt, arcu at vehicula malesuada, ante neque tristique ipsum, in porttitor orci tellus id ante. Maecenas ut commodo justo. Curabitur at elit nisl. Sed elementum ligula enim, elementum vestibulum metus convallis vel. Vestibulum facilisis, erat et bibendum vulputate, felis neque blandit lectus, quis rutrum massa ante et leo. Ut sit amet semper eros.',
			  				image: uploadsUrl + '/slide-integration.png',
			  				link: '#page/corporate-application-development-and-system-integration'
			  			},
			  			{
			  				title: 'Software Testing Services',
			  				text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce massa tellus, adipiscing nec condimentum at, aliquam egestas enim. Curabitur in leo at dui eleifend fringilla. Duis varius ante vel rhoncus lobortis. Etiam sed elit eget massa congue blandit vitae vitae nibh. In tincidunt risus non enim lacinia lacinia. Nam eget pellentesque odio, ut venenatis ipsum. Curabitur blandit lectus id nunc aliquet, at elementum nisl luctus. Maecenas tincidunt, arcu at vehicula malesuada, ante neque tristique ipsum, in porttitor orci tellus id ante. Maecenas ut commodo justo. Curabitur at elit nisl. Sed elementum ligula enim, elementum vestibulum metus convallis vel. Vestibulum facilisis, erat et bibendum vulputate, felis neque blandit lectus, quis rutrum massa ante et leo. Ut sit amet semper eros.',
			  				image: uploadsUrl + '/slide-test.png',
			  				link: '#page/software-testing-services'
			  			}
			  		],
			  		blocks: [
			  			{
			  				title: 'MARS',
			  				text: 'Mail archiving, analysis and reporting system. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce massa tellus, adipiscing nec condimentum at, aliquam egestas enim. Curabitur in leo at dui eleifend fringilla. Duis varius ante vel rhoncus lobortis. Etiam sed elit eget massa congue blandit vitae vitae nibh. In tincidunt risus non enim lacinia lacinia. Nam eget pellentesque odio, ut venenatis ipsum. Curabitur blandit lectus id nunc aliquet, at elementum nisl luctus. Maecenas tincidunt, arcu at vehicula malesuada, ante neque tristique ipsum, in porttitor orci tellus id ante. Maecenas ut commodo justo. Curabitur at elit nisl. Sed elementum ligula enim, elementum vestibulum metus convallis vel. Vestibulum facilisis, erat et bibendum vulputate, felis neque blandit lectus, quis rutrum massa ante et leo. Ut sit amet semper eros.',
			  				image: uploadsUrl + '/block-mars.png',
			  				rounded: false,
			  				link: '#/page/mars-email-archive-system'
			  			},
			  			{
			  				title: 'IPAM',
			  				text: 'IP Management System. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce massa tellus, adipiscing nec condimentum at, aliquam egestas enim. Curabitur in leo at dui eleifend fringilla. Duis varius ante vel rhoncus lobortis. Etiam sed elit eget massa congue blandit vitae vitae nibh. In tincidunt risus non enim lacinia lacinia. Nam eget pellentesque odio, ut venenatis ipsum. Curabitur blandit lectus id nunc aliquet, at elementum nisl luctus. Maecenas tincidunt, arcu at vehicula malesuada, ante neque tristique ipsum, in porttitor orci tellus id ante. Maecenas ut commodo justo. Curabitur at elit nisl. Sed elementum ligula enim, elementum vestibulum metus convallis vel. Vestibulum facilisis, erat et bibendum vulputate, felis neque blandit lectus, quis rutrum massa ante et leo. Ut sit amet semper eros.',
			  				image: uploadsUrl + '/block-ipam.png',
			  				link: '#/page/ipam-ip-management-system'
			  			},
			  			{
			  				title: 'Quota Reporting',
			  				text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce massa tellus, adipiscing nec condimentum at, aliquam egestas enim. Curabitur in leo at dui eleifend fringilla. Duis varius ante vel rhoncus lobortis. Etiam sed elit eget massa congue blandit vitae vitae nibh. In tincidunt risus non enim lacinia lacinia. Nam eget pellentesque odio, ut venenatis ipsum. Curabitur blandit lectus id nunc aliquet, at elementum nisl luctus. Maecenas tincidunt, arcu at vehicula malesuada, ante neque tristique ipsum, in porttitor orci tellus id ante. Maecenas ut commodo justo. Curabitur at elit nisl. Sed elementum ligula enim, elementum vestibulum metus convallis vel. Vestibulum facilisis, erat et bibendum vulputate, felis neque blandit lectus, quis rutrum massa ante et leo. Ut sit amet semper eros.',
			  				image: uploadsUrl + '/block-quota.png',
			  				link: '#/page/quota-reporting-system'
			  			},
			  			{
			  				title: 'MARS 2',
			  				text: 'Mail archiving, analysis and reporting system. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce massa tellus, adipiscing nec condimentum at, aliquam egestas enim. Curabitur in leo at dui eleifend fringilla. Duis varius ante vel rhoncus lobortis. Etiam sed elit eget massa congue blandit vitae vitae nibh. In tincidunt risus non enim lacinia lacinia. Nam eget pellentesque odio, ut venenatis ipsum. Curabitur blandit lectus id nunc aliquet, at elementum nisl luctus. Maecenas tincidunt, arcu at vehicula malesuada, ante neque tristique ipsum, in porttitor orci tellus id ante. Maecenas ut commodo justo. Curabitur at elit nisl. Sed elementum ligula enim, elementum vestibulum metus convallis vel. Vestibulum facilisis, erat et bibendum vulputate, felis neque blandit lectus, quis rutrum massa ante et leo. Ut sit amet semper eros.',
			  				image: uploadsUrl + '/block-mars.png'
			  			},
			  			{
			  				title: 'IPAM 2',
			  				text: 'IP Management System. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce massa tellus, adipiscing nec condimentum at, aliquam egestas enim. Curabitur in leo at dui eleifend fringilla. Duis varius ante vel rhoncus lobortis. Etiam sed elit eget massa congue blandit vitae vitae nibh. In tincidunt risus non enim lacinia lacinia. Nam eget pellentesque odio, ut venenatis ipsum. Curabitur blandit lectus id nunc aliquet, at elementum nisl luctus. Maecenas tincidunt, arcu at vehicula malesuada, ante neque tristique ipsum, in porttitor orci tellus id ante. Maecenas ut commodo justo. Curabitur at elit nisl. Sed elementum ligula enim, elementum vestibulum metus convallis vel. Vestibulum facilisis, erat et bibendum vulputate, felis neque blandit lectus, quis rutrum massa ante et leo. Ut sit amet semper eros.',
			  				image: uploadsUrl + '/block-ipam.png'
			  			},
			  			{
			  				title: 'Quota Reporting 2',
			  				text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce massa tellus, adipiscing nec condimentum at, aliquam egestas enim. Curabitur in leo at dui eleifend fringilla. Duis varius ante vel rhoncus lobortis. Etiam sed elit eget massa congue blandit vitae vitae nibh. In tincidunt risus non enim lacinia lacinia. Nam eget pellentesque odio, ut venenatis ipsum. Curabitur blandit lectus id nunc aliquet, at elementum nisl luctus. Maecenas tincidunt, arcu at vehicula malesuada, ante neque tristique ipsum, in porttitor orci tellus id ante. Maecenas ut commodo justo. Curabitur at elit nisl. Sed elementum ligula enim, elementum vestibulum metus convallis vel. Vestibulum facilisis, erat et bibendum vulputate, felis neque blandit lectus, quis rutrum massa ante et leo. Ut sit amet semper eros.',
			  				image: uploadsUrl + '/block-quota.png'
			  			}
			  		]
			  	},
		  		// Turkish content slider
			  	tr: {
			  		slides: [
			  			{
			  				title: 'Büyük Veri Platformu ve Uygulamaları',
			  				text: 'Büyük Veri kavramı, adından da anlaşılacağı gibi, temelde yüksek yoğunlukta, hızla büyüyen ve kaynakları çok çeşitlilik gösteren karmaşık veri yapılarını tariflemektedir. Egemsoft, büyük veri teknolojilerini stratejik öneme sahip araştırma ve ürün geliştirme alanı olarak belirlemiştir.',
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
			  				title: 'Veri Analiz',
			  				text: 'Karmaşık iletişim şebekelerinde yapılacak her türlü müdahalenin çok çeşitli etkileri olabilir. Bu tespitten haraketle geliştirilen veri analizi çözümümüz, farklı şebeke cihazlarından verileri toplamakta, birbirleri ile ilişkilendirmekte ve istendiğinde trendin de izlenebildiği çok çeşitli analiz olanaklarını sunmaktadır.',
							image: uploadsUrl + '/block-ipam.png',
			  				link: '#/page/ipam-ip-management-system'
			  			},
			  			{
			  				title: 'Log Analiz',
			  				text: 'Günümüzde iletişim şebekeleri, sürekli bilgi üreten çok akıllı cihazlardan oluşmaktadır. Log Analiz Aracımız, üretilen bu bilgilerin toplandığı, geçmiş ile ilişkilendirilerek analizlerin yapıldığı ve belirli kurallar çerçevesinde ilgililerin uyarılarak şebekelerin sağlıklı ve verimli çalışmasını sağlayan bir uygulamadır.',
							image: uploadsUrl + '/block-quota.png',
			  				link: '#/page/quota-reporting-system'
			  			},
			  			{
			  				title: 'IPAM',
			  				text: 'Telekom operatörlerinin kıt kaynaklarından biri de IP adresleridir. Kurumlar açısından bu kaynağı yüksek verimlilikle yönetebilmek son derece önemlidir. IP Adres Yönetimi çözümümüz, kurumların bu hedefi gerçekleştirebilmesini sağlayan yetenekli bir yazılım uygulamasıdır.',
							image: uploadsUrl + '/block-mars.png'
			  			},
			  			{
			  				title: 'Kota Raporlama',
			  				text: 'Günümüz telekomünikasyon şebekelerinde çeşitli yöntemler ile kullanım hizmet faturası üretmek mümkündür. Bu yöntemlerden biri de "Kullandığın Kadar Öde" şeklinde olabilir. Kota Raporlama çözümümüz, kullanıcıların cihazlarının ürettiği detaylı çağrı raporlarını inceleyen, fatura üretimine yönelik bilgileri toplayan bir uygulamadır.',
							image: uploadsUrl + '/block-ipam.png'
			  			},
			  			{
			  				title: 'Modem Arıza Tespit',
			  				text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce massa tellus, adipiscing nec condimentum at, aliquam egestas enim. Curabitur in leo at dui eleifend fringilla. Duis varius ante vel rhoncus lobortis. Etiam sed elit eget massa congue blandit vitae vitae nibh. In tincidunt risus non enim lacinia lacinia. Nam eget pellentesque odio, ut venenatis ipsum. Curabitur blandit lectus id nunc aliquet, at elementum nisl luctus. Maecenas tincidunt, arcu at vehicula malesuada, ante neque tristique ipsum, in porttitor orci tellus id ante. Maecenas ut commodo justo. Curabitur at elit nisl. Sed elementum ligula enim, elementum vestibulum metus convallis vel. Vestibulum facilisis, erat et bibendum vulputate, felis neque blandit lectus, quis rutrum massa ante et leo. Ut sit amet semper eros.',
			  				image: uploadsUrl + '/block-quota.png'
			  			}
			  		]
			  	}
		  	}
		  };
	  }]);
