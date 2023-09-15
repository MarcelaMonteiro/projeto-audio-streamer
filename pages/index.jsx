import ArquivoDeEpisodios from './arquivo-de-episodios';
import Lancamentos from './lancamentos-com-componentes';
import Tela1 from './tela-1';

export default function Home() {
	return (
		<main>
			<Tela1 />
			<ArquivoDeEpisodios />
			<Lancamentos />
		</main>
	);
}
