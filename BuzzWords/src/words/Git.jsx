export default function Git() {
    return (
        <>
            <h1>Git</h1>
            <p>Ett versionshanteringssystem som används för att hantera kod. <br>Kod sparas i s.k. <strong>"git repos"</strong> och vid varje sparning av kod gör man en "git commit" som "pushas" till repot. På så sätt får man historik, kan se vem som gjort vad samt motverkar konflikter i kod om man är flera utvecklare i samma projekt.  </p>

            <p>På tjänster som <strong>Github</strong> kan man se en kalender med hur ens commits sett ut det senaste året</p>
            <img src="images/github.png" />

            <h3>Tillhörande ord</h3>
            <p>
                <strong>Github</strong> - En tjänst där kod kan lagras, ägs av Microsoft.<br>
                <strong>Gitlab</strong> - Även det en tjänst där kod lagras, men som byggs på öppen källkod och går därför att hosta själv.
            </p>
        </>
    )
}