import Image from 'next/image';
import logo from '../src/logo.svg';
import DisplayTrack from '../src/components/display-track';
import pipoca from '../public/imagens/pipocaimg.png';

function Tela1() {
	return (
		<div
			style={{
				padding: '0 10rem',
			}}
		>
			<div
				style={{
					width: '100%',
					display: 'grid',
					gridTemplateColumns: '1fr max-content',
				}}
			>
				<p style={{ fontSize: '1.7rem', paddingTop: '2rem' }}>Pipoca Ágil</p>
				<li style={{ listStyleType: 'none' }}>
					<nav
						style={{
							display: 'flex',
							flexDirection: 'row',
							gap: '3rem',
							paddingTop: '1rem',
							fontSize: '1.4rem',
							paddingTop: '2rem',
							color: '#2E2F33',
							fontFamily: 'Plus Jakarta Sans',
							fontSize: '1rem',
							fontStyle: 'normal',
							fontWeight: '600',
							lineHeight: '1.5rem' /* 150% */,
							letterSpacing: '0.2rem',
							textTransform: 'uppercase',
						}}
					>
						<a>Sobre nós</a>
						<a>Extras</a>
						<a>Clube de membros</a>
					</nav>
				</li>
			</div>

			<div
				style={{
					display: 'grid',
					gridTemplateColumns: '1fr 1fr 1fr',
					paddingTop: '2rem',
				}}
			>
				<div>
					<h1
						style={{
							fontFamily: 'DM Sans',
							whiteSpace: 'wrap',
							width: '22rem',
							color: '#2E2F33',
							/* H1 */
							fontFamily: 'Satoshi',
							fontSize: '3rem',
							fontStyle: 'normal',
							fontWeight: '500',
							lineHeight: '3.5rem' /* 116.667% */,
							letterSpacing: '0.09rem',
						}}
					>
						O Podcast mais animado do mundo Ágil.
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
							paddingTop: '0.5rem',
							paddingBottom: '0.5rem',
						}}
					>
						Ouça nosso último episódio
					</p>

					<section style={{}}>
						<Image
							src={pipoca}
							alt="Picture of the author"
							width={300}
							height={500}
							style={{
								display: 'flex',
								width: '22rem',
								height: '26.375rem',
								flexDirection: 'column',
								justifyContent: 'center',
								alignItems: 'center',
								flexShrink: '0',
							}}
						/>
					</section>
				</div>

				<div>
					<section>
						<Image
							src={pipoca}
							alt="Picture of the author"
							width={'width: 22rem'}
							height={'38.9375rem'}
							style={{
								display: 'flex',
								width: '22rem',
								height: '38.9375rem',
								flexDirection: 'column',
								justifyContent: 'center',
								alignItems: 'center',
								flexShrink: '0',
							}}
						/>
					</section>
				</div>

				<div>
					<section>
						<Image
							src={pipoca}
							alt="Picture of the author"
							width={'22rem'}
							height={'20.9375rem'}
							style={{
								display: 'flex',
								width: '22rem',
								height: '20.9375rem',
								justifyContent: 'center',
								alignItems: 'center',
								flexShrink: '0',
							}}
						/>
					</section>
					<p
						style={{
							color: '#2E2F33',
							/* P1 */
							fontFamily: 'Plus Jakarta Sans',
							fontSize: '1.25rem',
							fontStyle: 'normal',
							fontWeight: '400',
							lineHeight: '1.5rem',
							paddingTop: '1.2rem',
						}}
					>
						Assista ao vivo
					</p>
					<div
						style={{
							display: 'flex',

							width: '22rem',
							padding: '0.5625rem 0.75rem 0.75rem 0.75rem',
							flexDirection: 'column',
							alignItems: 'flex-start',
							gap: '0.75rem',
							background: '#CED1D9',
							paddingTop: '1.31rem',
						}}
					>
						<p
							style={{
								width: '19.5rem',
								fontFamily: 'Plus Jakarta Sans',
								fontSize: '1rem',
								fontStyle: 'normal',
								fontWeight: '400',
								lineHeight: '1.5rem' /* 150% */,
								letterSpacing: '-0.02rem',
							}}
						>
							Agilidade além do desenvolvimento: aplicações no marketing
						</p>
						<div
							style={{
								display: 'flex',
								padding: '0.1875rem 0.5rem 0.1875rem 0.375rem',
								justifyContent: 'center',
								alignItems: 'center',
								gap: '0.375rem',
								borderRadius: '0.25rem',
								background: '#FFF',
							}}
						>
							{' '}
							<span
								style={{
									width: '0.75rem',
									height: '0.75rem',
									background: '#CED1D9',
								}}
							></span>
							<p3
								style={{
									color: '#2E2F33',
									/* P3 */
									fontFamily: 'Plus Jakarta Sans',
									fontSize: '0.75rem',
									fontStyle: 'normal',
									fontWeight: '400',
									lineHeight: '1rem',
								}}
							>
								32/13/47
							</p3>
						</div>
						<div
							style={{
								display: 'flex',
								padding: '0.1875rem 0.5rem 0.1875rem 0.375rem',
								justifyContent: 'center',
								alignItems: 'center',
								gap: '0.375rem',
								borderRadius: '0.25rem',
								background: '#FFF',
							}}
						>
							{' '}
							<span
								style={{
									width: '0.75rem',
									height: '0.75rem',
									background: '#CED1D9',
								}}
							></span>
							<p3
								style={{
									color: '#2E2F33',
									/* P3 */
									fontFamily: 'Plus Jakarta Sans',
									fontSize: '0.75rem',
									fontStyle: 'normal',
									fontWeight: '400',
									lineHeight: '1rem',
								}}
							>
								20:45
							</p3>
						</div>
					</div>
				</div>
			</div>
			<div
				style={{
					position: 'fixed',
					bottom: 0,
					width: '100%',
					background: 'red',
					left: 0,
				}}
			>
				Exemplo
			</div>
		</div>
	);
}

export default Tela1;
