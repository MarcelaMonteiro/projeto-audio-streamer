import ArquivoDeEpisodios from '../src/telas/home/arquivo-de-episodios';
import Lancamentos from '../src/telas/home/lancamentos-com-componentes';
import Tela1 from '../src/telas/home/tela-1';

export default function Home() {
	return (
		<main>
			<Tela1 />
			<Lancamentos />
			<ArquivoDeEpisodios />
		</main>
	);
}
