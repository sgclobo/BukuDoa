import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";

const sections = [
    {
        "title": "RITOS INICIAIS",
        "content": "Canto de entrada.\n\n<red><b>Sinal da cruz.</b></red>\nS: Em nome do Pai e do Filho e do Espírito Santo.\n<b>P: Amen.</b>\nS: A graça de Nosso Senhor Jesus Cristo, o amor do Pai e a comunhão do Espírito Santo estejam convosco.\n<b>P: Bendito seja Deus, que nos reuniu no amor de Cristo.</b>\n\n<red><b>ATO PENITENCIAL</b></red>\nS: Irmãos, para celebrarmos dignamente os santos mistérios, reconheçamos que somos pecadores. Confessemos os nossos pecados.\n<b>P: Confesso a Deus todo-poderoso e a vós, irmãos, que pequei muitas vezes por pensamentos e palavras, actos e omissões, por minha culpa, minha culpa, minha tão grande culpa. E peço à Virgem Maria, aos Anjos e Santos e a vós, irmãos, que rogueis por mim a Deus, nosso Senhor.</b>\nS: Deus todo-poderoso tenha compaixão de nós, perdoe os nossos pecados e nos conduza à vida eterna.\n<b>P: Amen.</b>\nS: Senhor, tende piedade de nós.\n<b>P: Senhor, tende piedade de nós.</b>\nS: Cristo, tende piedade de nós.\n<b>P: Cristo, tende piedade de nós.</b>\nS: Senhor, tende piedade de nós.\n<b>P: Senhor, tende piedade de nós.</b>"
    },
    {
        "title": "GLÓRIA",
        "content": "S: Glória a Deus nas alturas,\n<b>P: e paz na terra aos homens por Ele amados. Senhor Deus, Rei dos céus, Deus Pai todo-poderoso: nós Vos louvamos, nós Vos bendizemos, nós Vos adoramos, nós Vos glorificamos, nós Vos damos graças, por vossa imensa glória. Senhor Jesus Cristo, Filho Unigénito, Senhor Deus, Cordeiro de Deus, Filho de Deus Pai: Vós que tirais o pecado do mundo, tende piedade de nós. Vós que tirais o pecado do mundo, acolhei a nossa súplica. Vós, que estais à direita do Pai, tende piedade de nós. Só Vós sois o Santo; só Vós, o Senhor; só Vós, o Altíssimo, Jesus Cristo; com o Espírito Santo, na glória de Deus Pai. Amen.</b>\n\n<red><b>ORAÇÃO</b></red>\nS: Oremos.\n<b>P: Amen.</b>\n\n<red><b>LITURGIA DA PALAVRA</b></red>\nPrimeira leitura\nL: Leitura do Livro.....\nPalavra de Deus.\n<b>P: Graças a Deus.</b>\n\n<b>Salmo.</b>\nSegunda leitura\nL: Palavra de Deus.\n<b>P: Graças a Deus.</b>\n\n<b>Evangelho.</b>\nS: O Senhor esteja convosco.\n<b>P: Ele está no meio de nós.</b>\nS: Evangelho de Nosso Senhor Jesus Cristo segundo S.:....\n<b>P: Glória a Vós, Senhor.</b>\nS: Palavra da Salvação.\n<b>P: Glória a Vós, Senhor.</b>\n\n<b>HOMILIA</b>"
    },
    {
        "title": "PROFISSÃO DA FÉ",
        "content": "S: Creio em um só Deus,\n<b>P: Pai todo-poderoso, Criador do céu e da terra, de todas as coisas visíveis e invisíveis. Creio em um só Senhor, Jesus Cristo, Filho Unigénito de Deus, nascido do Pai antes de todos os séculos: Deus de Deus, Luz da Luz, Deus verdadeiro de Deus verdadeiro; gerado, não criado, consubstancial ao Pai. Por Ele todas as coisas foram feitas. E por nós, homens, e para nossa salvação desceu dos Céus. E encarnou pelo Espírito Santo, no seio da Virgem Maria, e Se fez homem. Também por nós foi crucificado sob Pôncio Pilatos; padeceu e foi sepultado. Ressuscitou ao terceiro dia, conforme as Escrituras; e subiu aos Céus, onde está sentado à direita do Pai. De novo há-de vir em sua glória, para julgar os vivos e os mortos; e o seu reino não terá fim. Creio no Espírito Santo, Senhor que dá a vida, e procede do Pai e do Filho; e com o Pai e o Filho é adorado e glorificado: Ele que falou pelos Profetas. Creio na Igreja una, santa, católica e apostólica. Professo um só batismo para remissão dos pecados. E espero a ressurreição dos mortos, e a vida do mundo que há-de vir. Amen.</b>"
    },
    {
        "title": "ORAÇÃO DOS FIÉIS (Tempo Comum)",
        "content": "S: Creio em um só Deus,\nS: Querido povo de Deus aqui reunido, roguemos ao Senhor nossas súplicas e pedidos, dizendo:\n<b>P: Senhor, escutai a nossa prece.</b>\nLeitor: Pela Santa Madre Igreja Católica, para que siga os passos de Nosso Senhor Jesus Cristo, sendo uma Igreja servidora e missionária, nós vos pedimos:\n<b>P: Senhor, escutai a nossa prece.</b>\nLeitor: Por todos os doentes de nossa comunidade, para que Deus lhes dê saúde e paz, rezemos ao Senhor:\n<b>P: Senhor, escutai a nossa prece.</b>\nLeitor: Pelo Santo Padre o Papa, sucessor de São Pedro, para que seja um bom pastor para a vinha do Senhor, levando a Palavra de Deus aos que precisam, rezemos ao Senhor:\n<b>P: Senhor, escutai a nossa prece.</b>\nLeitor: Por todos os bispos e padres da nossa Igreja, para que sejam servos humildes e não desanimem de levar Cristo aos que precisam, rezemos ao Senhor:\n<b>P: Senhor, escutai a nossa prece.</b>\n(A comunidade pode preparar outras preces com antecedência)\nS: Possam agradar-Vos, ó Deus, as preces de vossa Igreja, para que recebamos por vossa misericórdia o que por nossos méritos não ousamos esperar. Por Cristo, nosso Senhor.\n<b>P: Amém.</b>"
    },
    {
        "title": "LITURGIA EUCARÍSTICA",
        "content": "<b>Oração sobre as oblatas</b>\nS: Bendito sejais, Senhor, Deus do universo, pelo pão que recebemos da vossa bondade, fruto da terra e do trabalho do homem, que hoje Vos apresentamos, e que para nós se vai tornar Pão da vida.\n<b>P: Bendito seja Deus para sempre.</b>\nS: Bendito sejais, Senhor, Deus do universo, pelo vinho que recebemos da vossa bondade, fruto da videira e do trabalho do homem, que hoje Vos apresentamos e que para nós se vai tornar Vinho da salvação.\n<b>P: Bendito seja Deus para sempre.</b>\nS: Orai, irmãos, para que o meu e vosso sacrifício seja aceite por Deus Pai todo-poderoso.\n<b>P: Receba o Senhor por tuas mãos este sacrifício, para glória do seu nome, para nosso bem e de toda a santa Igreja. Amen.</b>\n\n<red><b>ORAÇÃO EUCARÍSTICA</b></red>\nS: O Senhor esteja convosco.\n<b>P: Ele está no meio de nós.</b>\nS: Corações ao alto.\n<b>P: O nosso coração está em Deus.</b>\nS: Dêmos graças ao Senhor nosso Deus.\n<b>P: É nosso dever, é nossa salvação.</b>\n\n<red><b>PREFÁCIO</b></red>\nS: Senhor, Pai santo, Deus eterno e omnipotente, é verdadeiramente nosso dever, é nossa salvação, dar-Vos graças sempre e em toda a parte por Jesus Cristo, vosso amado Filho. Ele é a vossa Palavra, por quem tudo criastes. Enviado por Vós como Salvador e Redentor, fez-Se homem pelo poder do Espírito Santo e nasceu da Virgem Maria. Para cumprir a vossa vontade e adquirir para Vós um povo santo, estendeu os braços e morreu na cruz; e, destruindo assim a morte, manifestou a vitória da ressurreição. Por isso, com os Anjos e os Santos, proclamamos a vossa glória, cantando numa só voz.\n<b>P: Santo, Santo, Santo, Senhor, Deus do universo. O céu e a terra proclamam a vossa glória. Hossana nas alturas. Bendito o que vem em nome do Senhor. Hossana nas alturas.</b>\n\n<red><b>CONSAGRAÇÃO</b></red>\nS: Vós, Senhor, sois verdadeiramente santo, sois a fonte de toda a santidade. Santificai estes dons, derramando sobre eles o vosso Espírito, de modo que se convertam, para nós, no Corpo e Sangue de Nosso Senhor Jesus Cristo. Na hora em que Ele Se entregava, para voluntariamente sofrer a morte, tomou o pão e, dando graças, partiu-o e deu-o aos seus discípulos, dizendo: Tomai, todos, e comei: isto é o meu Corpo que será entregue por vós. De igual modo, no fim da Ceia, tomou o cálice e, dando graças, deu-o aos seus discípulos, dizendo: Tomai, todos, e bebei: este é o cálice do meu Sangue, o sangue da nova e eterna aliança, que será derramado por vós e por todos, para remissão dos pecados. Fazei isto em memória de mim. Mistério da fé.\n<b>P: Anunciamos, Senhor, a vossa morte, proclamamos a vossa ressurreição. Vinde, Senhor Jesus!</b>"
    },
    {
        "title": "MEMORIAL E INTERCESSÕES",
        "content": "S: Celebrando agora, Senhor, o memorial da morte e ressurreição de vosso Filho, nós Vos oferecemos o pão da vida e o cálice da salvação e Vos damos graças porque nos admitistes à vossa presença para Vos servir nestes santos mistérios. Humildemente Vos suplicamos que, participando no Corpo e Sangue de Cristo, sejamos reunidos, pelo Espírito Santo num só corpo. Lembrai-Vos, Senhor, da vossa Igreja, dispersa por toda a terra, e tornai-a perfeita na caridade em comunhão com o Papa N., o nosso Bispo N. e todos aqueles que estão ao serviço do vosso povo. Lembrai-Vos também dos nossos irmãos que adormeceram na esperança da ressurreição, e de todos aqueles que na vossa misericórdia partiram deste mundo: admiti-os na luz da vossa presença. Tende misericórdia de nós, Senhor, e dai-nos a graça de participar na vida eterna, com a Virgem Maria, Mãe de Deus, os bem-aventurados Apóstolos e todos os Santos que desde o princípio do mundo viveram na vossa amizade, para cantarmos os vossos louvores, por Jesus Cristo, vosso Filho."
    },
    {
        "title": "DOXOLOGIA FINAL",
        "content": "S: Por Cristo, com Cristo, em Cristo, a Vós, Deus Pai todo-poderoso, na unidade do Espírito Santo, toda a honra e toda a glória agora e para sempre.\n<b>P: Amen.</b>"
    },
    {
        "title": "RITOS DA COMUNHÃO",
        "content": "<b>Pater noster</b>\nS: Obedientes à palavra do Salvador e formados por seu divino ensinamento, ousamos dizer...\n<b>P: Pai nosso que estais nos céus, santificado seja o vosso nome; venha a nós o vosso reino; seja feita a vossa vontade assim na terra como no céu. O pão nosso de cada dia nos dai hoje; perdoai-nos as nossas ofensas, assim como nós perdoamos a quem nos tem ofendido; e não nos deixeis cair em tentação; mas livrai-nos do mal.</b>\nS: Livrai-nos de todo o mal, Senhor, e dai ao mundo a paz em nossos dias, para que, ajudados pela vossa misericórdia, sejamos sempre livres do pecado e de toda a perturbação, enquanto esperamos a vinda gloriosa de Jesus Cristo nosso Salvador.\n<b>P: Vosso é o reino e o poder e a glória para sempre.</b>\n\n<red><b>SINAL DA PAZ</b></red>\nS: Senhor Jesus Cristo, que dissestes aos vossos Apóstolos: Deixo-vos a paz, dou-vos a minha paz: não olheis aos nossos pecados, mas à fé da vossa Igreja e dai-lhe a união e a paz, segundo a vossa vontade. Vós que sois Deus com o Pai na unidade do Espírito Santo.\n<b>P: Amen.</b>\nS: A paz do Senhor esteja sempre convosco.\n<b>P: O amor de Cristo nos uniu.</b>\nS: Saudai-vos na paz de Cristo.\n\n<red><b>CORDEIRO DE DEUS</b></red>\n<b>P: Cordeiro de Deus, que tirais o pecado do mundo, tende piedade de nós. Cordeiro de Deus, que tirais o pecado do mundo, tende piedade de nós. Cordeiro de Deus, que tirais o pecado do mundo, dai-nos a paz.</b>\n\n<red><b>CONVITE Á COMUNHÃO</b></red>\nS: Felizes os convidados para a Ceia do Senhor. Eis o Cordeiro de Deus, que tira o pecado do mundo.\n<b>P: Senhor, eu não sou digno de que entreis em minha morada, mas dizei uma palavra e serei salvo.</b>\n\n<red><b>COMUNHÃO</b></red>\nS: O Corpo de Cristo.\n<b>P: Amen.</b>"
    },
    {
        "title": "RITOS FINAIS",
        "content": "S: O Senhor esteja convosco.\n<b>P: Ele está no meio de nós.</b>\nS: Abençoe-vos Deus todo-poderoso, Pai, Filho e Espírito Santo.\n<b>P: Amen.</b>\nS: Ide em paz e o Senhor vos acompanhe.\n<b>P: Graças a Deus.</b>"
    }
];

function parseInlineText(input: string): React.ReactNode[] {
    const tokens: React.ReactNode[] = [];
    const regex = /(<\/?b>|<\/?i>|<\/?center>|<\/?red>)/g;
    let last = 0;
    let bold = false;
    let italic = false;
    let center = false;
    let red = false;
    let key = 0;

    const pushText = (text: string) => {
        if (!text) return;
        tokens.push(
            <Text
                key={key++}
                style={[
                    bold && styles.bold,
                    italic && styles.italic,
                    center && styles.centerText,
                    red && styles.redText
                ]}
            >
                {text}
            </Text>
        );
    };

    input.replace(regex, (match, _group, offset) => {
        pushText(input.slice(last, offset));
        if (match === "<b>") bold = true;
        else if (match === "</b>") bold = false;
        else if (match === "<i>") italic = true;
        else if (match === "</i>") italic = false;
        else if (match === "<center>") center = true;
        else if (match === "</center>") center = false;
        else if (match === "<red>") red = true;
        else if (match === "</red>") red = false;
        last = offset + match.length;
        return match;
    });

    pushText(input.slice(last));
    return tokens;
}

export default function DoaScreen() {
    return (
        <ScrollView style={styles.container} contentContainerStyle={styles.content}>
            <Text style={styles.pageTitle}>Missal Romano</Text>

            {sections.map((section, index) => (
                <View key={index} style={styles.section}>
                    <Text style={styles.sectionTitle}>{section.title}</Text>
                    <Text style={styles.sectionText}>{parseInlineText(section.content)}</Text>
                </View>
            ))}
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#f7f2e8",
    },
    content: {
        padding: 16,
        paddingBottom: 28,
    },
    pageTitle: {
        fontSize: 28,
        fontWeight: "700",
        color: "#4b2e1f",
        marginBottom: 16,
        textAlign: "center",
    },
    section: {
        marginBottom: 18,
        paddingBottom: 14,
        borderBottomWidth: 1,
        borderBottomColor: "#e5d5c7",
    },
    sectionTitle: {
        fontSize: 20,
        fontWeight: "700",
        color: "#c1121f",
        marginBottom: 8,
    },
    sectionText: {
        fontSize: 16,
        lineHeight: 25,
        color: "#2b2b2b",
        textAlign: "justify",
    },
    bold: {
        fontWeight: "bold",
    },
    italic: {
        fontStyle: "italic",
    },
    centerText: {
        textAlign: "center",
        width: "100%",
    },
    redText: {
        color: "#c1121f",
    }
});
