import ArquivoDeEpisodios from './arquivo-de-episodios';
import Lancamentos from './lancamentos-com-componentes';
import App from './index';

export default function TudoJunto() {
	return (
		<main>
			<App />
			<ArquivoDeEpisodios />
			<Lancamentos />
		</main>
	);
}
