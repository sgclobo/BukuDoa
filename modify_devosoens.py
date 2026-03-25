import json
import re

# Read novena_nsps.json
with open('x:/BukuDoa/novena_nsps.json', 'r', encoding='utf-8') as f:
    nsps_data = json.load(f)

# we just need the pages, and we will construct the js object
pages_str = json.dumps(nsps_data['pages'], ensure_ascii=False, indent=4)

js_object = f"""
const novenaNspsData = {{
  "title": "Novena a Nossa Senhora do Perpétuo Socorro",
  "section": "Novena a Nossa Senhora do Perpétuo Socorro",
  "label": "Novena a Nossa Senhora do Perpétuo Socorro",
  "image": require("../../assets/images/prayers/our-lady-of-perpetual-help-novena.webp"),
  "pages": {pages_str}
}};
"""

with open('x:/BukuDoa/app/(tabs)/devosoens.tsx', 'r', encoding='utf-8') as f:
    content = f.read()

# Insert before `export default function DevocoensScreen()`
content = content.replace('export default function DevocoensScreen() {', js_object + '\nexport default function DevocoensScreen() {')

# Add to sectionsList
content = re.sub(
    r"'Novena a Santa Rita de Cássia'\s*\];",
    "'Novena a Santa Rita de Cássia',\n    'Novena a Nossa Senhora do Perpétuo Socorro'\n  ];",
    content
)

# Insert the view after Novena a Santa Rita
view_jsx = """
        <View style={styles.section} onLayout={(e) => handleSectionLayout('Novena a Nossa Senhora do Perpétuo Socorro', e)}>
          <Text style={styles.sectionTitle}>{novenaNspsData.section}</Text>
          <Image
            source={novenaNspsData.image}
            style={styles.tercoImage}
          />
          {novenaNspsData.pages.map((page, index) => (
            <View key={`nsps-${index}`} style={styles.article}>
              <Text style={styles.text}>{renderFormattedText(page.replace(/<br>/g, '\\n'))}</Text>
            </View>
          ))}
        </View>
"""

content = re.sub(
    r'(\s*</View>\s*</ScrollView>)',
    lambda m: '\n' + view_jsx + m.group(1),
    content
)

with open('x:/BukuDoa/app/(tabs)/devosoens.tsx', 'w', encoding='utf-8') as f:
    f.write(content)

print('Done')
