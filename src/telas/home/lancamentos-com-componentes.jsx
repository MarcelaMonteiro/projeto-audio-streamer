import Image from 'next/image';
import pipocaimgg from '../../../public/imagens/pipocaimagem.png';

function Card(props) {
	const { title, text, data, duracao, span } = props;

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
					color: '#5C5F66',
					margin: 0,
					/* P4 */
					fontFamily: 'Plus Jakarta Sans',
					fontSize: '0.75rem',
					fontStyle: ' normal',
					fontWeight: '500',
					lineHeight: '1rem' /* 133.333% */,
					letterSpacing: '0.06rem',
					textTransform: 'uppercase',
				}}
			>
				{title}
			</p>
			<p
				style={{
					color: '#2E2F33',
					margin: 0,
					fontFamily: 'Plus Jakarta Sans',
					fontSize: '1.25rem',
					fontStyle: 'normal',
					fontWeight: '400',
					lineHeight: '1.5rem',
					alignSelf: 'stretch',
					wordWrap: 'break-word',
					whiteSpace: 'pre',
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
					{' '}
					<span
						style={{
							width: '0.75rem',
							height: '0.75rem',
							background: '#CED1D9',
						}}
					>
						{span}
					</span>
					{data}
				</div>
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
					{' '}
					<span
						style={{
							width: '0.75rem',
							height: '0.75rem',
							background: '#CED1D9',
						}}
					>
						{span}
					</span>
					{duracao}
				</div>
			</div>
		</div>
	);
}

function Lancamentos() {
	return (
		<div
			style={{
				width: '100%',
				display: 'flex',

				justifyContent: 'center',
				gap: '2.06rem',
				alignItems: 'stretch',
				paddingTop: '2rem',
			}}
		>
			<div style={{}}>
				<div style={{ padding: '2rem' }}>
					<h1
						style={{
							color: '#44464C',
							/* H2 */
							fontFamily: 'Plus Jakarta Sans',
							fontSize: '2.5rem',
							fontStyle: 'normal',
							fontWeight: '600',
							lineHeight: '3rem',
							width: '22rem',
							display: 'grid',
							justifyContent: 'center',
						}}
					>
						Próximos lançamentos
					</h1>
					<p
						style={{
							color: '#5C5F66',
							/* P1 */
							fontFamily: 'Plus Jakarta Sans',
							fontSize: '1.25rem',
							fontStyle: 'normal',
							fontWeight: '400',
							lineHeight: '1.5rem',
						}}
					>
						Já disponíveis para assinantes do clube!
					</p>
				</div>
				<div
					style={{
						display: 'flex',
						flexDirection: 'column',
						gap: '2.5rem',
						paddingLeft: '2rem',
					}}
				>
					<Card
						title="Para assinantes"
						data="32/13/47"
						duracao="1h75min"
						text={`Sabores do Ágil:\nexplorando Scrum, Kanbam e XP`}
					/>
					<Card
						title="Para assinantes"
						data="12/05/12"
						duracao="1h75min"
						text={`Histórias de sucesso Ágil: casos reais de \ntransformação`}
					/>
					<Card
						title="Para assinantes"
						data="01/25/00"
						duracao="1h75min"
						text={`Retrospectivas inovadoras: táticas para melhorar \ncontinuamente`}
					/>
				</div>
				<h2
					style={{
						color: '#5C5F66',
						/* P1 */
						fontFamily: 'Plus Jakarta Sans',
						fontSize: '1.25rem',
						fontStyle: 'normal',
						fontWeight: '400',
						lineHeight: '1.5rem',
						width: '28rem',
						paddingLeft: '2rem',
					}}
				>
					Não aguenta esperar pelos novos episódios?
				</h2>
				<p
					style={{
						color: '#2E2F33',
						/* P4 */
						fontFamily: 'Plus Jakarta Sans',
						fontSize: '0.75rem',
						fontStyle: 'normal',
						fontWeight: '500',
						lineHeight: '1rem' /* 133.333% */,
						letterSpacing: '0.06rem',
						textTransform: 'uppercase',
						width: '28rem',
						paddingLeft: '2rem',
					}}
				>
					Faça parte do nosso clube de membros
				</p>
			</div>

			<div
				style={{
					width: '100%',
					display: 'flex',
					justifyContent: 'center',
					gap: '2.06rem',
					alignItems: 'stretch',
					paddingTop: '2rem',
				}}
			>
				<section>
					<Image
						src={pipocaimgg}
						alt="Picture of the author"
						style={{ height: '100%' }}
					/>
				</section>
			</div>
		</div>
	);
}

export default Lancamentos;
