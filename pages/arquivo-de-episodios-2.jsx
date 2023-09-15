import Image from 'next/image';
import pipocaimg from '../public/imagens/pipocaimg.png';

function CardFooterItem(props) {
	const { children } = props;

	return (
		<div
			style={{
				display: 'flex',
				padding: ' 0.1875rem 0.5rem 0.1875rem 0.375rem',
				justifyContent: 'center',
				alignItems: 'center',
				gap: '0.375rem',
				borderRadius: '0.25rem',
				background: '#FFF',
				color: '#2E2F33',
				fontFamily: 'Inter',
				fontSize: '0.75rem',
				fontStyle: 'normal',
				fontWeight: '400',
				lineWeight: '1rem' /* 133.333% */,
			}}
		>
			<span
				style={{
					width: '0.75rem',
					height: '0.75rem',
					background: '#CED1D9',
				}}
			></span>
			{children}
		</div>
	);
}

function Card(props) {
	const { text, data, duracao } = props;
	return (
		<div
			style={{
				background: '#CED1D9',
				display: 'flex',
				width: '34rem',
				padding: '0.5625rem 0.75rem 0.75rem 0.75rem',
				flexDirection: 'column',
				alignItems: 'flex-start',
				gap: '0.75rem',
			}}
		>
			<p
				style={{
					color: '#2E2F33',
					fontFamily: 'Plus Jakarta Sans',
					fontSize: '1.25rem',
					fontStyle: 'normal',
					fontWeight: '400',
					lineHeight: '1.5rem',
				}}
			>
				{text}
			</p>

			<div
				style={{
					display: 'flex',
					alignItems: 'flex-start',
					gap: '0.75rem',
				}}
			>
				<CardFooterItem>{data}</CardFooterItem>
				<CardFooterItem>{duracao}</CardFooterItem>
			</div>
		</div>
	);
}

function Episodios() {
	return (
		<div
			style={{
				width: '100%',
				display: 'grid',
				gridTemplateColumns: '1fr 1fr',
			}}
		>
			<section>
				<Image
					src={pipocaimg}
					alt="Picture of the author"
					style={{
						display: 'flex',
						width: '34rem',
						height: '41.875rem',
						flexDirection: 'column',
						justifyContent: 'center',
						alignItems: 'center',
					}}
				/>
			</section>
			<div>
				<h2
					style={{
						color: '#44464C',
						fontFamily: 'Plus Jakarta Sans',
						fontSize: '2.5rem',
						fontStyle: 'normal',
						fontWeight: '600',
						lineHeight: '3rem',
						width: '22rem',
					}}
				>
					Arquivo de episódios
				</h2>
				<p
					style={{
						color: '#44464C',
						fontFamily: 'Plus Jakarta Sans',
						fontSize: '1.25rem',
						fontStyle: 'normal',
						fontWeight: '400',
						lineHeight: '1.5rem',
						width: '28rem',
					}}
				>
					Todos os nossos episódios para você ouvir quando quiser
				</p>
				<div
					style={{
						display: 'flex',
						flexDirection: 'column',
						gap: '2.5rem',
						paddingLeft: '2rem',
					}}
				>
					<Card
						data="32/13/47"
						duracao="1h75min"
						text={`Liderança adaptativa: como gerentes abraçam a agilidade`}
					/>
					<Card
						data="32/13/47"
						duracao="1h75min"
						text={`Cultura Ágil: construindo um ambiente de inovação e aprendizado`}
					/>
					<Card
						data="32/13/47"
						duracao="1h75min"
						text={`Colaboração Total: integrando times para resultados excepcionais`}
					/>

					<Card
						data="32/13/47"
						duracao="1h75min"
						text={`Ciclos Curtos, Resultados Rápidos: O poder do Timebox`}
					/>
				</div>
			</div>
		</div>
	);
}

export default Episodios;
