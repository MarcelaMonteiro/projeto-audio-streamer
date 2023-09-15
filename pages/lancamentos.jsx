
function Lancamentos() {
	return (
		<div style={{ display: "grid", gridTemplateColumns: "1fr 1fr" }}>
			<h1>Próximos lançamentos</h1>
			<p>Já disponíveis para assinantes do clube!</p>
			<div
				style={{
					background: "#CED1D9",
					display: "flex",
					width: "34rem",
					padding: "0.5625rem 0.75rem 0.75rem 0.75rem",
					flexDirection: "column",
					alignItems: "flex-start",
					gap: "0.75rem",
				}}
			>
				<p style={{
					color: "#5C5F66",
					margin: 0,
					/* P4 */
					fontFamily: "Plus Jakarta Sans",
					fontSize: "0.75rem",
					fontStyle: " normal",
					fontWeight: "500",
					lineHeight: "1rem", /* 133.333% */
					letterSpacing: "0.06rem",
					textTransform: "uppercase"
				}}>
					Para assinantes
				</p>
				<p
					style={{
						color: "#2E2F33",
						margin: 0,
						fontFamily: "Plus Jakarta Sans",
						fontSize: "1.25rem",
						fontStyle: "normal",
						fontWeight: "400",
						lineHeight: "1.5rem",
						alignSelf: "stretch",
						wordWrap: "break-word",
						whiteSpace: "pre"
					}}
				>
					{`Sabores do Ágil:\nexplorando Scrum, Kanbam e XP`}
				</p>
				<div style={{
					display: 'flex',
					alignItems: 'flex-start',
					gap: '0.75rem',
				}}>
					<div
						style={{
							display: "flex",
							padding: " 0.1875rem 0.5rem 0.1875rem 0.375rem",
							justifyContent: "center",
							alignItems: "center",
							gap: "0.375rem",
							borderRadius: "0.25rem",
							background: "#FFF",
							color: "#2E2F33",
							fontFamily: "Inter",
							fontSize: "0.75rem",
							fontStyle: "normal",
							fontWeight: "400",
							lineWeight: "1rem", /* 133.333% */
						}}
					>32/13/47
					</div>
					<div
						style={{
							display: "flex",
							padding: " 0.1875rem 0.5rem 0.1875rem 0.375rem",
							justifyContent: "center",
							alignItems: "center",
							gap: "0.375rem",
							borderRadius: "0.25rem",
							background: "#FFF",
							color: "#2E2F33",
							fontFamily: "Inter",
							fontSize: "0.75rem",
							fontStyle: "normal",
							fontWeight: "400",
							lineWeight: "1rem", /* 133.333% */
						}}
					>
						1h75min
						{/* <span style={{ background: "red", width: "1rem" }}></span> */}
					</div>
				</div>

			</div >
		</div >
	);
}

export default Lancamentos;
