import ReportFormatterFactory from './src/ReportFormatterFactory.js';
import CitiesReporter from './src/CitiesReporter.js';

const [cmd, script, param1] = process.argv;
const filename = './data/cidades-2.json';

try {
  const formater = ReportFormatterFactory.getFormatter(param1);
  const reporter = new CitiesReporter({ formaterStrategy: formater });
  const output = reporter.report(filename);

  console.log(output);
} catch (error) {
  console.error(error.message);
}
