import Image from "next/image";

export default function Home() {
    return (
        <div className={"max-w-7xl overflow-hidden rounded-xl p-4 lg:p-8 text-slate-700"}>
            <div className={"flex flex-col lg:flex-row items-center lg:space-x-8"}>
                <Image src={"/img/bg.png"}
                       width={600}
                       height={300}
                       className={"rounded-xl shadow"}
                       alt={"Einbürgerungstest Üben"}
                />
                <div className={"flex flex-col my-8 space-y-8 justify-between h-full"}>
                    <div className={"text-slate-600"}>
                        <h1 className={"font-bold text-lg mb-4"}>Wenn Sie dauerhaft in Deutschland leben, können Sie
                            sich unter bestimmten Voraussetzungen einbürgern lassen.</h1>
                        <p>Sie müssen dazu einen Antrag stellen. Ab Ihrem 16. Geburtstag (§ 37
                            Staatsangehörigkeitsgesetz) können Sie diesen Antrag selbst stellen. Für Kinder und
                            Jugendliche unter 16 müssen die Eltern den Antrag stellen.</p>
                        <p className={"mb-4"}>Antragsformulare erhalten Sie bei den zuständigen Einbürgerungsbehörden.
                            Welche Behörde für Ihre Einbürgerung zuständig ist, erfahren Sie bei:</p>
                        <ul className={"list-disc list-inside flex flex-col space-y-2"}>
                            <li className={""}>der Ausländerbehörde Ihrer Stadt oder Gemeinde</li>
                            <li>den Jugendmigrationsdiensten (JMD)</li>
                            <li>der Migrationsberatung für erwachsene Zuwanderer (MBE)</li>
                            <li>der Stadt- oder Kreisverwaltung.</li>
                        </ul>
                    </div>
                </div>
            </div>
            <h1 className={"font-bold text-xl my-4"}>Kosten</h1>
            <p>
                Die Einbürgerung kostet 255 Euro pro Person. Für minderjährige Kinder, die mit ihren Eltern zusammen
                eingebürgert werden, sind 51 Euro zu bezahlen. Minderjährige, die ohne ihre Eltern eingebürgert werden,
                müssen ebenfalls 255 Euro bezahlen.
                <br/>
                Wenn Sie nur sehr wenig verdienen oder mehrere Kinder (mit)eingebürgert werden, kann die Gebühr
                reduziert oder Ratenzahlung vereinbart werden.
            </p>
            <h1 className={"font-bold text-xl my-4"}>Voraussetzungen</h1>
            <p className={"my-2 font-semibold"}>Sie haben einen Anspruch auf Einbürgerung, wenn folgende Voraussetzungen
                vorliegen:</p>
            <ul className={"list-disc list-inside flex flex-col space-y-4"}>
                <li>unbefristetes Aufenthaltsrecht zum Zeitpunkt der Einbürgerung, eine Blaue Karte EU oder eine
                    befristete Aufenthaltserlaubnis, die ihrem Zweck nach zu einem dauerhaften Aufenthalt führen kann
                </li>
                <li>bestandener Einbürgerungstest (Kenntnisse über die Rechts- und Gesellschaftsordnung sowie die
                    Lebensverhältnisse in Deutschland)
                </li>
                <li>seit acht Jahren gewöhnlicher und rechtmäßiger Aufenthalt in Deutschland (diese Frist kann nach
                    erfolgreichem Besuch eines Integrationskurses auf sieben Jahre verkürzt werden, bei besonderen
                    Integrationsleistungen sogar auf sechs Jahre)
                </li>
                <li>eigenständige Sicherung des Lebensunterhalts (auch für unterhaltsberechtigte Familienangehörige)
                    ohne Sozialhilfe und Arbeitslosengeld II
                </li>
                <li>ausreichende Deutschkenntnisse
                </li>
                <li>keine Verurteilung wegen einer Straftat
                </li>
                <li>Bekenntnis zur freiheitlichen demokratischen Grundordnung des Grundgesetzes der Bundesrepublik
                    Deutschland
                </li>
                <li>grundsätzlich der Verlust beziehungsweise die Aufgabe der alten Staatsangehörigkeit (hier gibt es
                    Ausnahmen je nach Herkunftsland, bitte sprechen Sie mit der Einbürgerungsbehörde).
                </li>
            </ul>
            <p className={"text-sm my-4"}>
                Einzelheiten hierzu finden Sie in der Broschüre der Beauftragten der Bundesregierung für Migration,
                Flüchtlinge und Integration: <a
                className={"font-semibold underline cursor-pointer "}
                rel={"noreferrer"}
                target={"_blank"}
                href="https://www.bmi.bund.de/SharedDocs/downloads/DE/publikationen/themen/heimat-integration/wege-zur-einbuergerung.html">&quot;Wege
                zur Einbürgerung&quot;</a>.
            </p>
            <h1 className={"my-4 font-bold text-xl"}>Regelung für Kinder / Optionspflicht</h1>
            <p>
                Ein Kind ausländischer Eltern erwirbt mit seiner Geburt in Deutschland neben der Staatsangehörigkeit der
                Eltern auch die deutsche Staatsangehörigkeit, wenn ein Elternteil zum Zeitpunkt der Geburt seit acht
                Jahren rechtmäßig in Deutschland lebt und ein unbefristetes Aufenthaltsrecht besitzt. Nach Vollendung
                des 21. Lebensjahres muss das Kind sich zwischen der deutschen und der ausländischen Staatsangehörigkeit
                entscheiden (Optionspflicht), es sei denn, es ist in Deutschland aufgewachsen oder es besitzt neben der
                deutschen nur die Staatsangehörigkeit eines anderen EU-Staates oder der Schweiz.
            </p>
            <h1 className={"my-4 font-bold text-xl"}>Der Einbürgerungstest</h1>
            <p>Durch die erfolgreiche Teilnahme am Einbürgerungstest können Sie Kenntnisse der Rechts- und
                Gesellschaftsordnung und der Lebensverhältnisse in Deutschland nachweisen, die Sie benötigen, um sich in
                Deutschland einbürgern zu lassen.
                <br/>
                Bei den Prüfstellen des Bundesamtes für Migration und Flüchtlinge können Sie sich zum Test anmelden.

            </p>
            <h1 className={"my-4 font-bold text-xl"}>Wie sieht der Test aus?</h1>
            <p>
                Bei der Prüfung bekommen Sie ein Testheft mit 33 Fragen. Sie haben 60 Minuten Zeit, die Fragen zu
                beantworten. Bei jeder Frage müssen Sie aus vier möglichen Antworten die richtige Antwort auswählen.
                Wenn Sie mindestens 17 Fragen richtig beantworten, haben Sie den Test bestanden. Anschließend erhalten
                Sie vom Bundesamt für Migration und Flüchtlinge eine Bescheinigung über Ihr persönliches Testergebnis.
                <br/>
                Mit der Bescheinigung können Sie bei der Einbürgerungsbehörde staatsbürgerliche Kenntnisse nachweisen.
                Haben Sie weniger als 17 Fragen richtig beantwortet, können Sie den Test wiederholen.
            </p>
            <h1 className={"my-4 font-bold text-xl"}>33 Fragen aus unterschiedlichen Bereichen</h1>
            <p>
                30 Fragen gehören zu den Themenbereichen &quot;Leben in der Demokratie&quot;, &quot;Geschichte und
                Verantwortung&quot; sowie &quot;Mensch und Gesellschaft&quot;. Drei Testfragen werden zu dem Bundesland
                gestellt, in dem Sie mit Erstwohnsitz gemeldet sind.
            </p>
            <h1 className={"my-4 font-bold text-xl"}>Wer muss den Einbürgerungstest machen?</h1>
            <div>
                Wenn Sie die deutsche Staatsangehörigkeit beantragen, müssen Sie Kenntnisse der Rechts- und
                Gesellschaftsordnung und der Lebensverhältnisse in Deutschland mit Hilfe des Tests nachweisen.
                <h2 className={"font-semibold my-4"}>Ausnahmen:</h2>
                <ul className={"list-disc list-inside flex flex-col space-y-4"}>
                    <li> Sie haben einen deutschen Schulabschluss erworben.</li>
                    <li>Sie können die Anforderungen wegen einer körperlichen, geistigen oder seelischen Krankheit,
                        einer Behinderung oder altersbedingt nicht erfüllen.
                    </li>
                </ul>
            </div>
            <h1 className={"my-4 font-bold text-xl"}>Wo kann ich den Einbürgerungstest ablegen?</h1>
            <div>
                Bei Fragen zum Einbürgerungstest helfen Ihnen die örtlichen Einbürgerungsbehörden. Sie sagen Ihnen auch,
                wo Sie die nächste Prüfstelle finden, bei der Sie sich zur Testteilnahme anmelden können. Eine Liste der
                Prüfstellen aus Ihrem Bundesland finden Sie unter Downloads. Die Teilnahme am Einbürgerungstest kostet
                25 Euro. Bitte denken Sie daran, am Tag der Prüfung ein gültiges Ausweisdokument mit Lichtbild
                mitzubringen.
            </div>
            <div>
                Quelle: <a rel={"noreferrer"} target={"_blank"}
                           href={"https://www.bamf.de/DE/Themen/Integration/ZugewanderteTeilnehmende/Einbuergerung/einbuergerung-node.html#a_284306_0"}>BAMF:
                Einbürgerung in Deutschland (07.02.2023)</a>
            </div>
        </div>
    )
}
