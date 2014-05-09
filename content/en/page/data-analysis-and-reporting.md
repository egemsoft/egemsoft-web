- - -
##Data Analysis and Reporting

Every intervention on complex communication networks have different impacts. Data Analysis and Reporting solution has been developed to analyse such impacts. It collects data from various network devices, correlates such data and provides the tools for analysis including trend analysis which utilises historic data. 

**Primary Needs:**

- Data to be reported in DPI network is too big (~ 150 TB/month). Scalibility is of high importance
- DPI Reports that need specific actions
	- Reports to be created, related to root domain names, ( com.tr, edu.tr, gov.tr …)
	- Reporting different domain names of the same organizations by grouping (facebook.com - fb.com...)
	- Reporting domain names grouped by categories (social media, game, video etc.)
- High performance report creation is key
	- Result set of different queries should be created fast enough not to create a negative impact on the productivity of data analysts
- Definitions on DSL network are made by different departments
	- There are different record formats created by different sources. Understanding the behavior/movement on the network is only possible by correlating and evaluating all such records together
- Transaction records on the network should be kept to create historic set so to be analyzed
- The analysis of the impact of improvement works on the DSL network is required
- Reporting of customer experience as a whole, on DSL vendors is required
- Various reports to support network planning are required

**Work Flow:**

- Data Collection 
	- Transferring data from various data resources automatically to the system at specified hours/periods (DB – View, file transfer via FTP etc.)
- Data Analysis and Reporting
	- Correlating data from different resources by developed scripts
	- Developing scripts that would run on the correlated data to generate the required reports 
	- Exporting the generated reports in PDF, XLS formats, sending the reports to the related persons via e-mail
	- Integration with 3rd. party BI tools
	- Trend analysis on historic data  

**Data Resources:**  

![DataAnalysis](static/uploads/page/en/DataAnalysis.png)

**Sample Reports:**

***Network Analysis:***

- Distribution of subscribers based on Speed
	- Grouping speed experienced by subscribers
- Investigation of subscribers, whose speeds fall in the range 0-2 Mbit and whose speeds go beyond the range 0-2 Mbit
	- Identify the reason of speed falling into the range 0-2 Mbit 
- Identification of subscribers, whose speeds reside in the range of  0-2 Mbit constantly.
	- Investigation of subscribers, whose speeds are in the range 0-2 Mbit constantly or at certain time intervals.
- Investigation of subscribers on the basis of their profiles
	- Studies related to the identification of possible problems of DSLAM profiles 
- Examination of the result of correctional work 
	- Studying on the impacts and feedbacks of the correctional work gathered from the field

***DPI Reporting:***

- Traffic based on links and services
- Traffic based on domain roots (extension following the domain name .com, .com.tr, .edu.tr, etc..)
- Traffic based on domain categories (URL categories – news, games, social media, etc…)
- Option to execute reporting for past dates, supporting all DPI devices and covering total network data
 

