import React, { useState, useRef } from 'react';
import { ScrollView, StyleSheet, Text, View, TouchableOpacity, Modal, TextInput, Dimensions, Pressable } from "react-native";

type Entry = {
  title: string;
  content: string;
};

type Group = {
  section_title: string;
  items?: Entry[];
  entries?: Entry[];
};

type MasterSection = {
  section_title: string;
  content: {
    sections: Group[];
  };
};

const doutrinaSections = [
  {
    title: "Mandamentos da Lei de Deus",
    content: "1.º Adorar a Deus e amá-lo sobre todas as coisas.\n2.º Não invocar o santo nome de Deus em vão.\n3.º Santificar os domingos e festas de guarda.\n4.º Honrar pai e mãe e os outros legítimos superiores.\n5.º Não matar.\n6.º Guardar castidade nas palavras e nas obras.\n7.º Não furtar.\n8.º Não levantar falsos testemunhos.\n9.º Guardar castidade nos pensamentos e nos desejos.\n10.º Não cobiçar as coisas alheias.\n\n<b>Estes dez mandamentos resumem-se em dois:</b> Amar a Deus sobre todas as coisas, e ao próximo como a nós mesmos."
  },
  {
    title: "Mandamentos da Santa Madre Igreja",
    content: "1.º Ouvir missa inteira e abster-se de trabalhos desnecessários nos domingos e festas de guarda.\n2.º Confessar-se ao menos uma vez cada ano.\n3.º Comungar ao menos pela Páscoa da Ressurreição.\n4.º Guardar abstinência e jejuar nos dias determinados pela Igreja.\n5.º Contribuir para as despesas do culto e para a sustentação do clero."
  },
  {
    title: "Sacramentos da Santa Igreja",
    content: "1.º Baptismo\n2.º Confirmação\n3.º Eucaristia\n4.º Penitência\n5.º Santa Unção\n6.º Ordem\n7.º Matrimónio."
  },
  {
    title: "Pecados Capitais",
    content: "1.º Soberba\n2.º Avareza\n3.º Luxúria\n4.º Ira\n5.º Gula\n6.º Inveja\n7.º Preguiça."
  },
  {
    title: "Virtudes Opostas:",
    content: "Contra a soberba, <b>humildade</b>.\nContra a avareza, <b>liberalidade</b>.\nContra a luxúria, <b>castidade</b>.\nContra a ira, <b>paciência</b>.\nContra a gula, <b>temperança</b>.\nContra a inveja, <b>caridade</b>.\nContra a preguiça, <b>diligência</b>."
  },
  {
    title: "Pecados que Bradam ao Céu",
    content: "1.º Homicídio voluntário.\n2.º Pecado sensual contra a natureza.\n3.º Opressão dos pobres, principalmente dos órfãos e viúvas.\n4.º Não pagar o salário a quem trabalha."
  },
  {
    title: "Novíssimos do Homem",
    content: "<b>Morte · Juízo · Inferno · Paraíso.</b>"
  },
  {
    title: "Condições para se Confessar Bem",
    content: "1.º Exame de consciência;\n2.º Dor dos pecados;\n3.º Propósito firme de emenda;\n4.º Acusação dos pecados;\n5.º Satisfação ou Penitência."
  },
  {
    title: "Condições para Bem Comungar",
    content: "1.º Estar na graça de Deus;\n2.º Saber e pensar a quem se vai receber;\n3.º Estar em jejum eucarístico (não comer, nem beber coisa alguma desde uma hora antes da comunhão)."
  },
  {
    title: "Virtudes Teologais",
    content: "1.º Fé\n2.º Esperança\n3.º Caridade."
  },
  {
    title: "Dons do Espírito Santo",
    content: "1.º Sapiência\n2.º Entendimento\n3.º Conselho\n4.º Fortaleza\n5.º Ciência\n6.º Piedade\n7.º Temor de Deus."
  },
  {
    title: "Bem-aventuranças",
    content: "1.º Bem-aventurados os pobres em espírito, porque deles é o reino do Céu.\n2.º Bem-aventurados os mansos, porque possuirão a terra.\n3.º Bem-aventurados os que choram, porque serão consolados.\n4.º Bem-aventurados os que têm fome e sede de justiça, porque serão saciados.\n5.º Bem-aventurados os misericordiosos, porque alcançarão misericórdia.\n6.º Bem-aventurados os puros de coração, porque verão a Deus.\n7.º Bem-aventurados os pacíficos, porque serão chamados filhos de Deus.\n8.º Bem-aventurados os que sofrem perseguição por amor da justiça, porque deles é o reino do Céu."
  },
  {
    title: "Obras de Misericórdia (Corporais)",
    content: "1.º Dar de comer a quem tem fome\n2.º Dar de beber a quem tem sede\n3.º Vestir os nus\n4.º Dar pousada aos peregrinos\n5.º Assistir aos enfermos\n6.º Visitar os presos\n7.º Enterrar os mortos."
  },
  {
    title: "Obras de Misericórdia (Espirituais)",
    content: "1.º Dar bom conselho\n2.º Ensinar os ignorantes\n3.º Corrigir os que erram\n4.º Consolar os tristes\n5.º Perdoar as injúrias\n6.º Sofrer com paciência as fraquezas do próximo\n7.º Rogar a Deus por vivos e defuntos."
  },
  {
    title: "Sacramentos — Baptismo",
    content: "<redbold>O Baptismo</redbold> é o sacramento instituído por Nosso Senhor Jesus Cristo, que apaga o pecado original e outros pecados se os houver, e nos faz cristãos, isto é, discípulos de Jesus Cristo, filhos de Deus e membros da Igreja. Só se pode receber uma vez.\n<i>Como se batiza?</i> Batiza-se, tendo intenção de fazer o que faz a Igreja, e deitando água sobre a pessoa enquanto se diz: «[Nome], eu te batizo em nome do Pai, do Filho e do Espírito Santo».\n<i>Quem pode batizar?</i> Em caso de necessidade (perigo de vida) qualquer pessoa pode e deve batizar. Fora deste caso, só o sacerdote ou diácono."
  },
  {
    title: "Sacramentos — Confirmação",
    content: "<redbold>A Confirmação ou Crisma</redbold> é o sacramento instituído por Nosso Senhor Jesus Cristo que aumenta em nós a vida do Espírito Santo e nos ajuda a ser cristãos perfeitos e nos imprime este carácter. Só se pode receber uma vez."
  },
  {
    title: "Sacramentos — Eucaristia",
    content: "<redbold>A Eucaristia</redbold> é o sacramento instituído por Nosso Senhor Jesus Cristo que contém e nos dá o verdadeiro Corpo e o verdadeiro Sangue de Jesus, para nosso alimento espiritual.\n<i>Quando instituiu Jesus o Santíssimo Sacramento?</i> Na Última Ceia quando mudou o pão no seu Corpo e o vinho no seu Sangue.\n<i>O que está na hóstia antes de consagrar?</i> Na hóstia antes de consagrar está pão de trigo, sem fermento nem sal.\n<i>E depois de consagrar?</i> Na hóstia depois de consagrar está o verdadeiro Corpo, Sangue, Alma e Divindade de Nosso Senhor Jesus Cristo, tão real e perfeitamente como está no céu."
  },
  {
    title: "Sacramentos — Penitência",
    content: "<redbold>A Penitência ou Confissão ou Reconciliação</redbold> é o sacramento instituído por Nosso Senhor Jesus Cristo para perdoar os pecados cometidos depois do Baptismo.\n<i>É preciso confessar-se sempre que se vai comungar?</i> Não é preciso confessar-se cada vez que se vai comungar. Quem estiver na graça de Deus pode comungar sempre."
  },
  {
    title: "Sacramentos — Unção",
    content: "<redbold>A Santa Unção</redbold> é o sacramento instituído por Nosso Senhor Jesus Cristo para alívio espiritual e corporal dos doentes e os preparar para a vida eterna."
  },
  {
    title: "Sacramentos — Ordem",
    content: "<redbold>A Ordem</redbold> é o sacramento instituído por Nosso Senhor Jesus Cristo para dar aos sacerdotes o poder e a graça de exercerem as funções sagradas do culto de Deus e da salvação das almas."
  },
  {
    title: "Sacramentos — Matrimónio",
    content: "<redbold>O Matrimónio</redbold> é o sacramento instituído por Nosso Senhor Jesus Cristo para estabelecer uma santa e indissolúvel união entre o homem e a mulher, dar-lhes a graça de se amarem e de educarem cristãmente os filhos."
  },
  {
    title: "Novíssimos",
    content: "<i>O que são os Novíssimos?</i> Os Novíssimos são os últimos fins do homem.\n<i>O que é a morte?</i> A morte é a separação da alma do corpo.\n<i>O que é o juízo?</i> O juízo é prestar contas no Tribunal de Deus.\n<i>Quantos juízos há?</i> Há dois juízos: O juízo particular é logo depois da morte. O juízo universal é depois da ressurreição dos mortos no fim do mundo.\n<i>O que é o Inferno?</i> O inferno é o estado de infelicidade eterna daqueles que morreram na inimizade com Deus, ou seja, em pecado mortal.\n<i>O que é o Purgatório?</i> O Purgatório é o estado das almas que morreram na graça de Deus mas sem terem feito completa penitência dos seus pecados. Podemos aliviá-las com orações, boas obras, esmolas e sobretudo com a Santa Missa.\n<i>O que é o Paraíso?</i> O Paraíso ou o Céu é o estado dos que morreram na graça de Deus, na casa do Pai, na qual eternamente gozam todos os bens."
  },
  {
    title: "Deus",
    content: "<i>Quem é Deus?</i> Deus é o nosso Pai do Céu, Criador e Senhor do Céu e da terra.\n<i>Onde está Deus?</i> Deus está no Céu, na terra e em toda a parte.\n<i>Para que é que Deus nos criou?</i> Deus criou-nos para O amar, louvar e servir nesta vida, e O gozar para sempre no Céu."
  },
  {
    title: "Trindade",
    content: "<i>Quantas são as pessoas da Santíssima Trindade?</i> As pessoas da Santíssima Trindade são três: Pai, Filho e Espírito Santo; três pessoas distintas, mas um só Deus verdadeiro.\n<i>Quem é o Pai?</i> O Pai é a primeira Pessoa da Santíssima Trindade, porque não procede de outra pessoa, mas é o princípio das outras duas pessoas.\n<i>Qual das três Pessoas encarnou?</i> A Pessoa que encarnou e se fez homem foi o Filho.\n<i>Como se chama o Filho de Deus feito homem? Nosso Senhor Jesus Cristo.</i>\n<i>Quando o Filho de Deus se fez homem deixou de ser Deus?</i> Não. Permaneceu verdadeiro Deus e começou a ser também verdadeiro homem."
  },
  {
    title: "Espírito Santo, Maria, Graça",
    content: "<i>Onde está Jesus Cristo?</i> Jesus Cristo enquanto Deus, está no Céu, na terra e em toda a parte; enquanto homem está no Céu e no Santíssimo Sacramento da Eucaristia.\n<i>Quem é o Espírito Santo?</i> O Espírito Santo é a terceira Pessoa da Santíssima Trindade, verdadeiro Deus, como o Pai e o Filho.\n<i>Quando vem o Espírito Santo às nossas almas?</i> No Baptismo e, dum modo mais solene, na Confirmação ou Crisma.\n<i>A Santíssima Virgem pode chamar-se Mãe de Deus?</i> A Virgem Santíssima pode e deve chamar-se Mãe de Deus, porque é Mãe de Jesus Cristo, que é Deus.\n<i>Maria Santíssima, sendo Mãe, continuou a ser Virgem?</i> Maria sendo Mãe, continuou a ser sempre Virgem.\n<i>Quem era São José?</i> São José era o esposo virginal de Maria e pai adoptivo de Jesus.\n\n<b>O que é a graça de Deus?</b> A graça de Deus é a vida de Deus em nós, um dom interior e sobrenatural, que o Senhor nos concede para a nossa salvação.\n<b>O que é a oração?</b> A oração é uma piedosa elevação da alma para Deus.\n<b>Quando se deve rezar?</b> Deve-se «rezar sempre» (Lc 18, 1), mas sobretudo ao levantar, ao deitar e no momento da tentação."
  },
  {
    title: "Pecados e Igreja",
    content: "<i>O que é o pecado mortal?</i> O pecado mortal é uma desobediência à Lei de Deus em matéria grave, com plena advertência do entendimento e consentimento da vontade.\n<i>Porque se chama mortal?</i> Chama-se mortal, porque mata ou retira da alma a vida sobrenatural, que é a graça de Deus.\n<i>O que é o pecado venial?</i> O pecado venial é uma desobediência à Lei de Deus em matéria leve ou desobediência em matéria grave, mas sem perfeita advertência ou sem pleno consentimento.\n<i>O que é o pecado original?</i> O pecado original é o pecado que herdamos dos nossos primeiros pais, Adão e Eva.\n<i>Onde é que a alma se purifica do pecado original?</i> A alma purifica-se do pecado original no sacramento do Baptismo.\n\n<b>O que é a Igreja?</b> A Igreja é a sociedade de todos os fiéis baptizados, que professam a mesma fé e estão unidos ao Papa.\n<b>Quem é o Papa?</b> O Papa é o Sucessor de São Pedro, Vigário de Cristo na terra, Chefe supremo da Santa Igreja.\n<b>Quem são os Bispos?</b> Os Bispos são os sucessores dos Apóstolos.\n<b>Quem são os sacerdotes?</b> Os sacerdotes são os colaboradores dos Bispos, distinguidos com o sacramento da Ordem."
  }
];

const exameConscienciaData = {
  title: "Exame de Consciência",
  content: `1.º Mandamento – Rezei todos os dias? Contribuo para o culto? Falei contra Deus ou a religião? Duvidei da fé? Acreditei em superstições? Recebi a comunhão em pecado? Confessei-me ao menos uma vez por ano?

2.º Mandamento – Fiz juramentos falsos? Fiz alguma promessa? Já a cumpri?

3.º Mandamento – Faltei à Missa aos domingos? Trabalhei desnecessariamente? Guardei o jejum e abstinência?

4.º Mandamento – Respeito, obedeço e amo os meus pais? Dei boa educação aos filhos? Dou-lhes bom exemplo? Rezo com eles e por eles?

5.º Mandamento – Desejei a morte a alguém? Ando a mal com alguém? Bati ou feri alguém? Excedi-me na alimentação ou bebida? Dou esmolas?

6.º e 9.º Mandamentos – Demorei com malícia em pensamentos ou desejos desonestos? Vi figuras ou coisas indecentes? Assisti ao cinema ou televisão quando eram imorais? Li livros, jornais ou revistas más? Tive conversas de malícia? Dei escândalo? Cometi acções desonestas? Frequentei bailes ou discotecas pouco recomendáveis?

7.º e 10.º Mandamentos – Tirei alguma coisa? Tenho restituições a fazer? Enganei nas vendas? Fui invejoso?

8.º Mandamento – Disse mentiras? Causei prejuízo a alguém? Julguei mal do próximo? Disse mal dos outros? Levantei calúnias? Revelei segredos?

CONFISSÃO
1.º <b>Acusação dos pecados.</b> Abençoai-me, Padre, porque pequei. Há.... (dias, meses...) que me confessei. Cumpri a penitência? Deixei de confessar algum pecado mortal? Foi por esquecimento? Ou por querer, calando-me por vergonha?

ACTO DE CONTRIÇÃO:
2.º Meu Deus, porque sois tão bom, tenho muita pena de Vos ter ofendido. Ajudai-me a não tornar a pecar.

ACTO DE CONTRIÇÃO MAIOR:
3.º Meu Deus, porque sois infinitamente bom e Vos amo de todo o meu coração, pesa-me de Vos ter ofendido, e, com o auxílio da vossa divina graça, proponho firmemente emendar-me e nunca mais Vos tornar a ofender. Peço e espero o perdão das minhas culpas pela vossa infinita misericórdia. Amen.`
};

const renderFormattedText = (text: string, baseStyle: any) => {
  const paragraphs = text.split('\n');
  return paragraphs.map((para, index) => {
    if (para.trim() === '') {
      return <View key={index} style={{ height: 10 }} />;
    }

    const hasQuestion = para.includes('?');

    const renderParts = (str: string, isQuestion: boolean) => {
      const paraStyle = isQuestion ? { fontStyle: "italic" as const } : undefined;
      const regex = /(<b>.*?<\/b>|<i>.*?<\/i>|<redbold>.*?<\/redbold>)/g;
      const parts = str.split(regex);
      return parts.map((part, j) => {
        if (part.startsWith('<b>') && part.endsWith('</b>')) {
          return <Text key={j} style={[{ fontWeight: "bold" }, isQuestion && { fontStyle: "italic" }]}>{part.slice(3, -4)}</Text>;
        }
        if (part.startsWith('<i>') && part.endsWith('</i>')) {
          return <Text key={j} style={[{ fontStyle: "italic" }]}>{part.slice(3, -4)}</Text>;
        }
        if (part.startsWith('<redbold>') && part.endsWith('</redbold>')) {
          return <Text key={j} style={[{ fontWeight: "bold", color: "#c1121f" }, isQuestion && { fontStyle: "italic" }]}>{part.slice(9, -10)}</Text>;
        }
        return <Text key={j} style={paraStyle}>{part}</Text>;
      });
    };

    if (hasQuestion && para.trim().endsWith('?')) {
      return (
        <Text key={index} style={[baseStyle, { fontStyle: 'italic', marginBottom: 4 }]}>
          {renderParts(para, true)}
        </Text>
      );
    }

    return (
      <Text key={index} style={baseStyle}>
        {renderParts(para, false)}
      </Text>
    );
  });
};

export default function DoutrinaScreen() {
  const [activeTab, setActiveTab] = useState<'Doutrina' | 'Vida Cristã' | 'Exame'>('Doutrina');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const scrollRef = useRef<ScrollView>(null);
  const sectionRefs = useRef<{ [key: string]: number }>({});

  const [vidaCristaData, setVidaCristaData] = useState({
    oracao: 'Diária',
    missa: 'Semanal',
    reconciliacao: '',
    novena: '',
    baptismo: '',
    comunhao: '',
    crisma: '',
    casamento: '',
    diocese: '',
    paroquia: '',
    devocao: ''
  });
  const [isDataModalVisible, setDataModalVisible] = useState(false);
  const [isProfileModalVisible, setProfileModalVisible] = useState(false);
  const [tempData, setTempData] = useState({ ...vidaCristaData });

  const handleSaveData = () => {
    setVidaCristaData(tempData);
    setDataModalVisible(false);
    setProfileModalVisible(false);
  };

  const openDataModal = () => {
    setTempData({ ...vidaCristaData });
    setDataModalVisible(true);
  };

  const openProfileModal = () => {
    setTempData({ ...vidaCristaData });
    setProfileModalVisible(true);
  };

  const scrollToSection = (index: number) => {
    const title = doutrinaSections[index].title;
    const y = sectionRefs.current[title] || 0;
    scrollRef.current?.scrollTo({ y, animated: true });
    setIsMenuOpen(false);
  };

  return (
    <View style={styles.mainContainer}>
      {/* Top Tabs */}
      <View style={styles.tabContainer}>
        {(['Doutrina', 'Vida Cristã', 'Exame'] as const).map(tab => (
          <TouchableOpacity
            key={tab}
            style={[styles.tab, activeTab === tab && styles.activeTab]}
            onPress={() => setActiveTab(tab)}
          >
            <Text style={[styles.tabText, activeTab === tab && styles.activeTabText]}>{tab}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <ScrollView 
        ref={scrollRef}
        style={styles.container} 
        contentContainerStyle={styles.content}
      >
        {activeTab === 'Doutrina' && (
          <View>
            <View style={styles.headerInside}>
              <TouchableOpacity style={styles.hamburgerInside} onPress={() => setIsMenuOpen(true)}>
                <Text style={styles.hamburgerIconInside}>☰</Text>
              </TouchableOpacity>
              <Text style={styles.headerTitleInside}>Doutrina</Text>
            </View>
            <Text style={styles.pageTitle}>Essenciais da Doutrina Cristã</Text>
            {doutrinaSections.map((item, index) => (
              <View 
                key={index} 
                style={styles.block}
                onLayout={(e) => {
                  sectionRefs.current[item.title] = e.nativeEvent.layout.y;
                }}
              >
                <Text style={styles.itemTitle}>{item.title}</Text>
                {renderFormattedText(item.content, styles.itemContent)}
              </View>
            ))}
          </View>
        )}

        {activeTab === 'Vida Cristã' && (
          <View>
            <Text style={styles.pageTitle}>Vida Cristã</Text>
            
            {/* Summary Card */}
            <View style={styles.card}>
              <Text style={styles.cardTitle}>Sumário</Text>
              <View style={styles.cardRow}>
                <Text style={styles.cardLabel}>Oração regular:</Text>
                <Text style={styles.cardValue}>{vidaCristaData.oracao || '—'}</Text>
              </View>
              <View style={styles.cardRow}>
                <Text style={styles.cardLabel}>Missa:</Text>
                <Text style={styles.cardValue}>{vidaCristaData.missa || '—'}</Text>
              </View>
              <View style={styles.cardRow}>
                <Text style={styles.cardLabel}>Reconciliação:</Text>
                <Text style={styles.cardValue}>{vidaCristaData.reconciliacao || '—'}</Text>
              </View>
              <View style={styles.cardRow}>
                <Text style={styles.cardLabel}>Novena:</Text>
                <Text style={styles.cardValue}>{vidaCristaData.novena || '—'}</Text>
              </View>
              <TouchableOpacity style={styles.editButton} onPress={openDataModal}>
                <Text style={styles.editButtonText}>Adicionar dados</Text>
              </TouchableOpacity>
            </View>

            {/* Profile Card */}
            <View style={styles.card}>
              <Text style={styles.cardTitle}>Perfil Espiritual</Text>
              <View style={styles.cardRow}>
                <Text style={styles.cardLabel}>Baptismo:</Text>
                <Text style={styles.cardValue}>{vidaCristaData.baptismo || '—'}</Text>
              </View>
              <View style={styles.cardRow}>
                <Text style={styles.cardLabel}>Primeira Comunhão:</Text>
                <Text style={styles.cardValue}>{vidaCristaData.comunhao || '—'}</Text>
              </View>
              <View style={styles.cardRow}>
                <Text style={styles.cardLabel}>Crisma:</Text>
                <Text style={styles.cardValue}>{vidaCristaData.crisma || '—'}</Text>
              </View>
              <View style={styles.cardRow}>
                <Text style={styles.cardLabel}>Casamento:</Text>
                <Text style={styles.cardValue}>{vidaCristaData.casamento || '—'}</Text>
              </View>
              <View style={styles.cardRow}>
                <Text style={styles.cardLabel}>Diocese:</Text>
                <Text style={styles.cardValue}>{vidaCristaData.diocese || '—'}</Text>
              </View>
              <View style={styles.cardRow}>
                <Text style={styles.cardLabel}>Paróquia:</Text>
                <Text style={styles.cardValue}>{vidaCristaData.paroquia || '—'}</Text>
              </View>
              <View style={styles.cardRow}>
                <Text style={styles.cardLabel}>Devoção:</Text>
                <Text style={styles.cardValue}>{vidaCristaData.devocao || '—'}</Text>
              </View>
              <TouchableOpacity style={styles.editButton} onPress={openProfileModal}>
                <Text style={styles.editButtonText}>Adicionar / Editar perfil</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}

        {activeTab === 'Exame' && (
          <View>
            <Text style={styles.pageTitle}>{exameConscienciaData.title}</Text>
            <View style={styles.block}>
              {renderFormattedText(exameConscienciaData.content, styles.itemContent)}
            </View>
          </View>
        )}
      </ScrollView>

      {/* Modals */}
      <Modal visible={isDataModalVisible} transparent animationType="slide">
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Text style={styles.modalHeader}>Dados de Vida Cristã</Text>
            <Text style={styles.label}>Oração regular</Text>
            <TextInput 
              style={styles.input} 
              value={tempData.oracao} 
              onChangeText={(t) => setTempData({...tempData, oracao: t})}
              placeholder="Ex: Diária, Semanal..."
            />
            <Text style={styles.label}>Missa</Text>
            <TextInput 
              style={styles.input} 
              value={tempData.missa} 
              onChangeText={(t) => setTempData({...tempData, missa: t})}
              placeholder="Ex: Domingo, Diária..."
            />
            <Text style={styles.label}>Reconciliação</Text>
              <TextInput 
                style={styles.input} 
                value={tempData.reconciliacao} 
                onChangeText={(t) => setTempData({...tempData, reconciliacao: t})}
                placeholder="DD/MM/AAAA"
              />
            <Text style={styles.label}>Novena</Text>
            <TextInput 
              style={styles.input} 
              value={tempData.novena} 
              onChangeText={(t) => setTempData({...tempData, novena: t})}
              placeholder="Ex: S. Rita..."
            />
            <View style={styles.modalButtons}>
              <TouchableOpacity onPress={() => setDataModalVisible(false)}><Text style={styles.cancel}>Cancelar</Text></TouchableOpacity>
              <TouchableOpacity onPress={handleSaveData}><Text style={styles.save}>Salvar</Text></TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>

      <Modal visible={isProfileModalVisible} transparent animationType="slide">
        <View style={styles.modalOverlay}>
          <ScrollView contentContainerStyle={styles.modalScrollContent}>
            <View style={styles.modalContent}>
              <Text style={styles.modalHeader}>Perfil Espiritual</Text>
              
              <Text style={styles.label}>Baptismo</Text>
              <TextInput 
                style={styles.input} 
                value={tempData.baptismo} 
                onChangeText={(t) => setTempData({...tempData, baptismo: t})}
                placeholder="DD/MM/AAAA"
              />

              <Text style={styles.label}>Primeira Comunhão</Text>
              <TextInput 
                style={styles.input} 
                value={tempData.comunhao} 
                onChangeText={(t) => setTempData({...tempData, comunhao: t})}
                placeholder="DD/MM/AAAA"
              />

              <Text style={styles.label}>Crisma</Text>
              <TextInput 
                style={styles.input} 
                value={tempData.crisma} 
                onChangeText={(t) => setTempData({...tempData, crisma: t})}
                placeholder="DD/MM/AAAA"
              />

              <Text style={styles.label}>Casamento</Text>
              <TextInput 
                style={styles.input} 
                value={tempData.casamento} 
                onChangeText={(t) => setTempData({...tempData, casamento: t})}
                placeholder="DD/MM/AAAA"
              />

              <Text style={styles.label}>Diocese</Text>
              <TextInput 
                style={styles.input} 
                value={tempData.diocese} 
                onChangeText={(t) => setTempData({...tempData, diocese: t})}
              />
              <Text style={styles.label}>Paróquia</Text>
              <TextInput 
                style={styles.input} 
                value={tempData.paroquia} 
                onChangeText={(t) => setTempData({...tempData, paroquia: t})}
              />
              <Text style={styles.label}>Devoção</Text>
              <TextInput 
                style={styles.input} 
                value={tempData.devocao} 
                onChangeText={(t) => setTempData({...tempData, devocao: t})}
              />
              <View style={styles.modalButtons}>
                <TouchableOpacity onPress={() => setProfileModalVisible(false)}><Text style={styles.cancel}>Cancelar</Text></TouchableOpacity>
                <TouchableOpacity onPress={handleSaveData}><Text style={styles.save}>Salvar</Text></TouchableOpacity>
              </View>
            </View>
          </ScrollView>
        </View>
      </Modal>
      {/* Sidebar Menu Overlay */}
      <Modal visible={isMenuOpen} transparent animationType="none">
        <View style={styles.menuOverlay}>
          <Pressable style={styles.menuBackdrop} onPress={() => setIsMenuOpen(false)} />
          <View style={styles.sidebar}>
            <View style={styles.sidebarHeader}>
              <Text style={styles.sidebarTitle}>Índice</Text>
              <TouchableOpacity onPress={() => setIsMenuOpen(false)}>
                <Text style={styles.closeMenu}>✕</Text>
              </TouchableOpacity>
            </View>
            <ScrollView style={styles.menuList}>
              {doutrinaSections.map((item, index) => (
                <TouchableOpacity 
                  key={index} 
                  style={styles.menuItem} 
                  onPress={() => scrollToSection(index)}
                >
                  <Text style={styles.menuItemText}>{item.title}</Text>
                </TouchableOpacity>
              ))}
            </ScrollView>
          </View>
        </View>
      </Modal>

    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: "#f7f2e8",
  },
  tabContainer: {
    flexDirection: 'row',
    backgroundColor: '#ead9cf',
    padding: 4,
  },
  headerInside: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 8,
    paddingHorizontal: 16,
    paddingBottom: 8,
    backgroundColor: '#f7f2e8',
  },
  hamburgerInside: {
    padding: 8,
  },
  hamburgerIconInside: {
    fontSize: 24,
    color: '#4b2e1f',
  },
  headerTitleInside: {
    fontSize: 20,
    fontWeight: '700',
    color: '#4b2e1f',
    marginLeft: 16,
  },
  tab: {
    flex: 1,
    paddingVertical: 10,
    alignItems: 'center',
    borderRadius: 8,
  },
  activeTab: {
    backgroundColor: '#f7f2e8',
  },
  tabText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#7a1c1c',
  },
  activeTabText: {
    color: '#c1121f',
    fontWeight: '800',
  },
  container: {
    flex: 1,
    backgroundColor: "#f7f2e8",
  },
  content: {
    padding: 16,
    paddingBottom: 30,
  },
  pageTitle: {
    fontSize: 26,
    fontWeight: "800",
    color: "#4b2e1f",
    marginBottom: 18,
    textAlign: "center",
  },
  block: {
    marginBottom: 18,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: "800",
    color: "#c1121f",
    marginBottom: 10,
  },
  subBlock: {
    marginBottom: 14,
    paddingLeft: 8,
    borderLeftWidth: 3,
    borderLeftColor: "#e7c6c2",
  },
  subTitle: {
    fontSize: 18,
    fontWeight: "700",
    color: "#7a1c1c",
    marginBottom: 8,
  },
  item: {
    marginBottom: 12,
  },
  itemTitle: {
    fontSize: 16,
    fontWeight: "700",
    color: "#9b111e",
    marginBottom: 4,
  },
  itemContent: {
    fontSize: 16,
    lineHeight: 24,
    color: "#2b2b2b",
    textAlign: "justify",
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    borderWidth: 1,
    borderColor: '#ead9cf',
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: '800',
    color: '#c1121f',
    marginBottom: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#f7f2e8',
    paddingBottom: 4,
  },
  cardRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  cardLabel: {
    fontSize: 15,
    color: '#4b2e1f',
    fontWeight: '600',
  },
  cardValue: {
    fontSize: 15,
    color: '#9b111e',
    fontWeight: '700',
  },
  editButton: {
    marginTop: 8,
    backgroundColor: '#ead9cf',
    paddingVertical: 10,
    borderRadius: 8,
    alignItems: 'center',
  },
  editButtonText: {
    color: '#7a1c1c',
    fontSize: 14,
    fontWeight: '700',
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
  },
  modalScrollContent: {
    flexGrow: 1,
    justifyContent: 'center',
    padding: 20,
  },
  modalContent: {
    backgroundColor: '#f7f2e8',
    borderRadius: 16,
    padding: 20,
    elevation: 5,
  },
  modalHeader: {
    fontSize: 20,
    fontWeight: '800',
    color: '#c1121f',
    marginBottom: 16,
  },
  label: {
    fontSize: 14,
    fontWeight: '600',
    color: '#4b2e1f',
    marginTop: 10,
    marginBottom: 4,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ead9cf',
    borderRadius: 8,
    padding: 10,
    backgroundColor: '#fff',
    fontSize: 16,
  },
  modalButtons: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginTop: 20,
  },
  cancel: {
    marginRight: 20,
    color: '#7a1c1c',
    fontWeight: '600',
    fontSize: 16,
  },
  save: {
    color: '#c1121f',
    fontWeight: '800',
    fontSize: 16,
  },
  // Menu Overlay Styles
  menuOverlay: {
    flex: 1,
    flexDirection: 'row',
  },
  menuBackdrop: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  sidebar: {
    width: 280,
    backgroundColor: '#f7f2e8',
    height: '100%',
    shadowColor: '#000',
    shadowOffset: { width: -2, height: 0 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 10,
  },
  sidebarHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ead9cf',
    backgroundColor: '#ead9cf',
  },
  sidebarTitle: {
    fontSize: 18,
    fontWeight: '800',
    color: '#4b2e1f',
  },
  closeMenu: {
    fontSize: 22,
    color: '#7a1c1c',
    fontWeight: '700',
  },
  menuList: {
    flex: 1,
    padding: 10,
  },
  menuItem: {
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#f0e6dc',
  },
  menuItemText: {
    fontSize: 15,
    color: '#7a1c1c',
    fontWeight: '600',
  }
});
