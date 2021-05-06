import React from "react";
import Container from "../components/layout/Container";
import TitleAndDesc from "../components/meta/TitleAndDesc";
import ExternalLink from "../components/misc/ExternalLink";

export const WiderrufContent = ({ embed = false }) => {
	const sanitizedHeading = React.cloneElement(embed ? <h4></h4> : <h2></h2>, {
		children: "Folgen des Widerrufs",
	});

	return (
		<>
			<p>
				Sie haben das Recht, binnen vierzehn Tagen ohne Angabe von Gründen
				diesen Vertrag zu widerrufen.
			</p>
			<p>
				Die Widerrufsfrist beträgt vierzehn Tage ab dem Tag an dem Sie oder ein
				von Ihnen benannter Dritter, der nicht der Beförderer ist, die Waren in
				Besitz genommen haben bzw. hat.
			</p>
			<p>
				Um Ihr Widerrufsrecht auszuüben, müssen Sie uns (Philip Weidich,
				Chiemgaustraße 78, 81549 München, Tel.: +49 (0) 176 7669 5017, E-Mail:
				info@watchtrade24.de) mittels einer eindeutigen Erklärung (z. B. ein mit
				der Post versandter Brief, Telefax oder E-Mail) über Ihren Entschluss,
				diesen Vertrag zu widerrufen, informieren. Sie können dafür das
				beigefügte{" "}
				<ExternalLink href="/WatchTrade24_Muster_Widerrufsformular.pdf" color>
					Muster-Widerrufsformular
				</ExternalLink>{" "}
				verwenden, das jedoch nicht vorgeschrieben ist.
			</p>
			<p>
				Zur Wahrung der Widerrufsfrist reicht es aus, dass Sie die Mitteilung
				über die Ausübung des Widerrufsrechts vor Ablauf der Widerrufsfrist
				absenden.
			</p>
			{sanitizedHeading}
			<p>
				Wenn Sie diesen Vertrag widerrufen, haben wir Ihnen alle Zahlungen, die
				wir von Ihnen erhalten haben, einschließlich der Lieferkosten (mit
				Ausnahme der zusätzlichen Kosten, die sich daraus ergeben, dass Sie eine
				andere Art der Lieferung als die von uns angebotene, günstigste
				Standardlieferung gewählt haben), unverzüglich und spätestens binnen
				vierzehn Tagen ab dem Tag zurückzuzahlen, an dem die Mitteilung über
				Ihren Widerruf dieses Vertrags bei uns eingegangen ist. Für diese
				Rückzahlung verwenden wir dasselbe Zahlungsmittel, das Sie bei der
				ursprünglichen Transaktion eingesetzt haben, es sei denn, mit Ihnen
				wurde ausdrücklich etwas anderes vereinbart; in keinem Fall werden Ihnen
				wegen dieser Rückzahlung Entgelte berechnet. Wir können die Rückzahlung
				verweigern, bis wir die Waren wieder zurückerhalten haben oder bis Sie
				den Nachweis erbracht haben, dass Sie die Waren zurückgesandt haben, je
				nachdem, welches der frühere Zeitpunkt ist.
			</p>
			<p>
				Sie haben die Waren unverzüglich und in jedem Fall spätestens binnen
				vierzehn Tagen ab dem Tag, an dem Sie uns über den Widerruf dieses
				Vertrags unterrichten, an uns zurückzusenden oder zu übergeben. Die
				Frist ist gewahrt, wenn Sie die Waren vor Ablauf der Frist von vierzehn
				Tagen absenden. Sie tragen die unmittelbaren Kosten der Rücksendung der
				Waren. Sie müssen für einen etwaigen Wertverlust der Waren nur
				aufkommen, wenn dieser Wertverlust auf einen zur Prüfung der
				Beschaffenheit, Eigenschaften und Funktionsweise der Waren nicht
				notwendigen Umgang mit ihnen zurückzuführen ist.
			</p>
			<p>
				Quelle:{" "}
				<ExternalLink href="https://rechtsanwalt-metzler.de" color>
					Rechtsanwalt Metzler
				</ExternalLink>
			</p>
		</>
	);
};

const widerruf = () => {
	return (
		<Container spacing>
			<TitleAndDesc
				title="Widerrufsbelehrung"
				description="Widerrufsbelehrung"
			/>
			<div className="legal">
				<h1>Widerrufsbelehrung</h1>
				<h2>Widerrufsrecht</h2>
				<WiderrufContent />
			</div>
		</Container>
	);
};

export default widerruf;
