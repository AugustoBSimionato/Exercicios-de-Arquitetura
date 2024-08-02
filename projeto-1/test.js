import fs from 'fs';
import ReportFormatterFactory from './src/ReportFormatterFactory.js';
import CitiesReporter from './src/CitiesReporter.js';

function testReportGeneration(formatName) {
  try {
    const formatter = ReportFormatterFactory.getFormatter(formatName);
    const reporter = new CitiesReporter({ formaterStrategy: formatter });
    const output = reporter.report('./data/cidades-2.json');
    const outputFile = `./output/report.${formatName}`;

    console.log(`Testando formato ${formatName.toUpperCase()}:`);

    fs.writeFileSync(outputFile, output);
    console.log(`Arquivo ${outputFile} criado com sucesso.`);
    console.log('Teste passou? true');
  } catch (err) {
    console.error(`Erro ao criar arquivo ${outputFile}:`, err);
    console.log('Teste passou? false');
  }

  console.log('-----------------------------------');
}

testReportGeneration('html');
testReportGeneration('txt');
