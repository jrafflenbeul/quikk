import { Grid } from "@geist-ui/react";
import React from "react";
import Hero from "../../components/leistungen/Hero";
import TitleAndDesc from "../../components/meta/TitleAndDesc";
import ServicePreview from "../../components/leistungen/ServicePreview";
import apps from "../../assets/images/apps.svg";
import webdesign from "../../assets/images/webdesign.svg";
import server from "../../assets/images/server.svg";
import software from "../../assets/images/software.svg";
import {
	ID_DATABASES_SERVERS_AND_APIS,
	ID_MOBILE_APPS,
	ID_SOFTWARE,
	ID_WEBDESIGN_AND_ECOMMERCE,
	GRID_GAP,
} from "../../constants";
import Container from "../../components/layout/Container";
import ServiceFooter from "../../components/leistungen/ServiceFooter";
import ThemeWrapper from "../../components/theme/ThemeWrapper";

export const services = [
	{
		src: software,
		title: "Software und Tools",
		content:
			"Professionelle und zielgerichtete Entwicklung von Software. Mehr Funktionalität und Unterstützung für Ihren Arbeitsalltag durch eine individuelle Implementierung.",
		id: ID_SOFTWARE,
		use: [
			{
				title: "Individualentwicklung",
				content:
					"Eine übliche Standardsoftware reicht nicht aus, um Sie und Ihr Unternehmen zu unterstützen? Wir entwickeln gemeinsam mit Ihnen eine passgenaue Lösung. Denn keiner kennt die Abläufe und Herausforderungen Ihres Geschäftes so gut wie Sie selbst.",
			},
			{
				title: "Digitalisierung von Geschäftsprozessen",
				content:
					"Schluss mit der Zettelwirtschaft! Wir helfen Ihnen dabei, Ihre Geschäftsprozesse digital zu erfassen und betriebliche Abläufe zu optimieren. Profitieren Sie von unseren modularen Komponenten und sparen Sie sich die lästige Doppelpflege Ihrer Ressourcen.",
			},
			{
				title: "Automatisierung täglicher Aufgaben",
				content:
					"Manuell eine Rechnungserstellung vorzunehmen oder Bestelleingänge zu verwalten kann ganz schön zeitaufwändig und repetitiv sein. Mit unseren automatisierten Abläufen schaffen wir Abhilfe und reduzieren die Fehleranfälligkeit.",
			},
			{
				title: "Analyse und Auswertung Ihrer Daten",
				content:
					"Gemeinsam mit uns werten Sie Ihre Geschäftsdaten aus und erhalten Einblicke in die alltäglich anfallenden Datensätze, um neue Erkenntnisse zu gewinnen.",
			},
			{
				title: "Per Installation oder im Web",
				content:
					"Egal wie groß oder klein unsere Lösungen sind, Sie selbst können entscheiden, wie die Nutzung aussieht. Unsere Anwendungen können bequem und überall vom Web abgerufen oder wahlweise auf Ihrem Computer installiert werden.",
			},
			{
				title: "Entwicklung von Prototypen",
				content:
					"Mit einem ersten technologischen Durchstich überprüfen wir die Umsetzbarkeit Ihres Vorhabens und können bereits nach 2 Wochen eine erste Rückmeldung in Form eines Proof of Concepts liefern.",
			},
			{
				title: "Technische Beratung",
				content:
					"Wir selbst setzen uns täglich mit neuen Tools und Frameworks auseinander und beantworten Ihnen gerne sämtliche Fragen zu Technologien aus dem JavaScript Ökosystem und deren Umsetzung.",
			},
			{
				title: "Erweiterung und Pflege von Code",
				content:
					"Wir leben die Softwareentwicklung, daher kümmern wir uns auch um Ihre bestehenden Lösungen. Sie können auf uns zählen, wenn es um die Entwicklung von neuen Features oder einer Wartung für vorhandenes Coding geht.",
			},
		],
	},
	{
		src: webdesign,
		title: "Webdesign und E-Commerce",
		content:
			"Für einen attraktiven und professionellen Auftritt im Web, der Sie und Ihr Unternehmen wiederspiegelt. Mit eBay/mobile.de Integration und SEO.",
		id: ID_WEBDESIGN_AND_ECOMMERCE,
		use: [
			{
				title: "Professionell, individuell, einzigartig",
				content:
					"Mehr als nur eine Visitenkarte im Web. Gemeinsam mit Ihnen gehen wir auf konkrete Vorstellungen und Wünsche ein, damit Sie sich im Internet optimal präsentieren können. Wir liefern Ihnen eine Webpräsenz, die so einzigartig ist, wie Sie selbst.",
			},
			{
				title: "Eigene Bestell- und Buchungssysteme",
				content:
					"Sie sind auf der Suche nach einem eigenen Bestell- oder Buchungssystem für Ihren Online Shop, Ihre Gastronomie oder Ihren Lieferservice? Bei uns bekommen Sie eine kostengünstige und sichere Lösung, die sich auf Wunsch in Ihre Website integrieren lässt.",
			},
			{
				title: "Vollständige E-Commerce Umsetzung",
				content:
					"Sie besitzen bereits einen eigenen Online Shop auf z.B. eBay oder mobile.de und möchten Ihre Inserate auch auf Ihrer Website anzeigen lassen? Nichts leichter als das. Wir binden Ihre Angebote ein und stellen sie auf der Website dar.",
			},
			{
				title: "CMS (z.B. WordPress) Integration",
				content:
					"Die Zeiten von Websites mit statischen Inhalten sind vorbei. Wir kümmern uns darum, dass Ihre Website wieder ansprechend wirkt und binden dynamische Inhalte, wie z.B. einen Blog, eine Projektübersicht oder Terminübersichten mit WordPress oder unserem eigenen CMS ein.",
			},
			{
				title: "Attraktive UI/UX",
				content:
					"Sauberes Coding gepaart mit einer modernen Designsprache, die Ihrem Geschmack folgt. Damit hat Ihre Website einen Wiedererkennungswert und bleibt zukünftigen Kunden im Kopf.",
			},
			{
				title: "Responsive, HTTPS, SEO, kostenloses Hosting",
				content:
					"Natürlich sind unsere Weblösungen vollständig responsive und für alle Endgeräte optimiert. Wir bieten außerdem ein kostenloses SSL-Zertifikat, kostenloses Hosting und technisches SEO an, damit Sie sofort und ohne Kopfschmerzen durchstarten können.",
			},
		],
	},
	{
		src: apps,
		title: "Mobile Apps",
		content:
			"Sind Sie oft unterwegs oder müssen jederzeit erreichbar sein? Dann muss eine flexible Lösung her: Wir entwickeln Apps für Android und iOS mit Offline Verfügbarkeit.",
		id: ID_MOBILE_APPS,
		use: [
			{
				title: "Software für die Hosentasche",
				content:
					"Sie benötigen mehr Flexibilität bei der Nutzung Ihrer Anwendungen? Wir bieten die Entwicklung von mobilen Apps an und nutzen die eingebauten Features der Smartphones wie Kamera, Bluetooth oder GPS.",
			},
			{
				title: "Offline Support",
				content:
					"Aktuell können wir noch nicht überall und zu jeder Zeit online sein. Auch wir kennen das Problem und berücksichtigen daher in unseren Apps Möglichkeiten, Inhalte für eine spätere Verwendung herunterzuladen.",
			},
			{
				title: "Intuitive Bedienung",
				content:
					"Zusammen mit einer gemeinsamen Einführung sorgt ein klar strukturiertes Layout und eine intuitive Bedienung unserer Apps dafür, dass sich NutzerInnen zurechtfinden und Freude an der Bedienung haben.",
			},
			{
				title: "Für Android und iOS",
				content:
					"Unsere Apps lassen sich auf beiden Betriebssystemen installieren und nutzen.",
			},
		],
	},
	{
		src: server,
		title: "Datenbanken, Server und APIs",
		content:
			"Sie möchten Ihre Anwendungen miteinander verbinden, Inhalte in Datenbanken speichern oder neue Schnittstellen entwickeln lassen? Wir helfen Ihnen dabei.",
		id: ID_DATABASES_SERVERS_AND_APIS,
		use: [
			{
				title: "Ganzheitliche Lösungen",
				content:
					"Unsere Dienstleistungen umfassen die gesamte Spannbreite der Anwendungsentwicklung und lassen zu, dass wir unsere eigenen Datenbanken, Server und Schnittstellen entwickeln und mit attraktiven UIs verbinden können. Auch eine reine Backend Lösung ohne UI Anbindung wird von uns angeboten.",
			},
			{
				title: "Datenaustausch",
				content:
					"Mit unserer Software und eigens entwickelten Schnittstellen lassen wir Ihre Programme miteinander kommunizieren und ermöglichen den Datenaustausch zwischen Ihren bestehenden und fremden Anwendungen und Systemen.",
			},
			{
				title: "Eigene Datenbankentwicklung",
				content:
					"Wir entwickeln und erweitern Datenbanken für Ihr System und sorgen für eine fehlerfreie Anbindung an Ihre Anwendungen. Passgenau, flexibel und nach Ihren Anforderungen umgesetzt.",
			},
		],
	},
];

const leistungen = () => {
	const title =
		"Die perfekte Ergänzung: Individuelle Software & attraktives Webdesign.";
	const desc =
		"Mit unseren auf Sie zugeschnittenen Lösungen unterstützen wir Sie dabei, Ihren Arbeitsalltag effizienter zu gestalten und digitale Herausforderungen zu meistern.";

	return (
		<>
			<TitleAndDesc {...{ title, desc }} />
			<Hero title={title} subtitle={desc} />
			{services.map((service, i) => (
				<Container spacing key={i}>
					<ServicePreview {...service} revert={!!(i % 2)} id={service.id} />
				</Container>
			))}
			<ServiceFooter />
		</>
	);
};

export default leistungen;
