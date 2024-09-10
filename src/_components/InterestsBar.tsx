export default () => (
	<div className="join join-vertical lg:join-horizontal grid sm:grid-flow-col-dense grid-flow-row-dense sm:grid-cols-4 sm:grid-rows-1 grid-rows-4 grid-cols-1 rounded-2xl shadow-xl mb-16">
		<div className="card p-6 sm:p-8 border-2 border-b-0 sm:border-2 sm:border-r-0 border-base-300 join-item flex flex-col gap-4">
			<h2 className="text-md md:text-lg font-medium">current interests</h2>
			<button
				id="interests-btn"
				type="button"
				className="btn btn-accent text-md md:text-lg font-medium"
			>
				refresh
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="20"
					height="20"
					fill="currentColor"
					id="refresh-interest-svg"
					viewBox="0 0 16 16"
					style={{ borderWidth: "0px !important;" }}
				>
					<title>refresh</title>
					<path d="M11.534 7h3.932a.25.25 0 0 1 .192.41l-1.966 2.36a.25.25 0 0 1-.384 0l-1.966-2.36a.25.25 0 0 1 .192-.41m-11 2h3.932a.25.25 0 0 0 .192-.41L2.692 6.23a.25.25 0 0 0-.384 0L.342 8.59A.25.25 0 0 0 .534 9" />
					<path
						fill-rule="evenodd"
						d="M8 3c-1.552 0-2.94.707-3.857 1.818a.5.5 0 1 1-.771-.636A6.002 6.002 0 0 1 13.917 7H12.9A5 5 0 0 0 8 3M3.1 9a5.002 5.002 0 0 0 8.757 2.182.5.5 0 1 1 .771.636A6.002 6.002 0 0 1 2.083 9z"
					/>
				</svg>
			</button>
		</div>
		<div className="card p-6 sm:p-8 border-2 border-b-0 sm:border-2 sm:border-r-0 border-base-300 join-item flex flex-col gap-2">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="24"
				height="24"
				fill="currentColor"
				viewBox="0 0 16 16"
				style={{ borderWidth: "0px !important;" }}
			>
				<title>question cloud</title>
				<path d="M8.05 9.6c.336 0 .504-.24.554-.627.04-.534.198-.815.847-1.26.673-.475 1.049-1.09 1.049-1.986 0-1.325-.92-2.227-2.262-2.227-1.02 0-1.792.492-2.1 1.29A1.7 1.7 0 0 0 6 5.48c0 .393.203.64.545.64.272 0 .455-.147.564-.51.158-.592.525-.915 1.074-.915.61 0 1.03.446 1.03 1.084 0 .563-.208.885-.822 1.325-.619.433-.926.914-.926 1.64v.111c0 .428.208.745.585.745" />
				<path d="m10.273 2.513-.921-.944.715-.698.622.637.89-.011a2.89 2.89 0 0 1 2.924 2.924l-.01.89.636.622a2.89 2.89 0 0 1 0 4.134l-.637.622.011.89a2.89 2.89 0 0 1-2.924 2.924l-.89-.01-.622.636a2.89 2.89 0 0 1-4.134 0l-.622-.637-.89.011a2.89 2.89 0 0 1-2.924-2.924l.01-.89-.636-.622a2.89 2.89 0 0 1 0-4.134l.637-.622-.011-.89a2.89 2.89 0 0 1 2.924-2.924l.89.01.622-.636a2.89 2.89 0 0 1 4.134 0l-.715.698a1.89 1.89 0 0 0-2.704 0l-.92.944-1.32-.016a1.89 1.89 0 0 0-1.911 1.912l.016 1.318-.944.921a1.89 1.89 0 0 0 0 2.704l.944.92-.016 1.32a1.89 1.89 0 0 0 1.912 1.911l1.318-.016.921.944a1.89 1.89 0 0 0 2.704 0l.92-.944 1.32.016a1.89 1.89 0 0 0 1.911-1.912l-.016-1.318.944-.921a1.89 1.89 0 0 0 0-2.704l-.944-.92.016-1.32a1.89 1.89 0 0 0-1.912-1.911z" />
				<path d="M7.001 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0" />
			</svg>
			<h2 className="text-md md:text-lg font-medium">thinking about</h2>
			<p id="thinking-interest" style={{ border: "none" }}>
				minimalist shoes
			</p>
		</div>
		<div className="card p-6 sm:p-8 border-2 border-b-0 sm:border-2 sm:border-r-0 border-base-300 join-item flex flex-col gap-2">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="24"
				height="24"
				fill="currentColor"
				viewBox="0 0 16 16"
				style={{ borderWidth: "0px !important;" }}
			>
				<title>headphones</title>
				<path d="M8 3a5 5 0 0 0-5 5v1h1a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V8a6 6 0 1 1 12 0v5a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1h1V8a5 5 0 0 0-5-5" />
			</svg>
			<h2 className="text-md md:text-lg font-medium">listening to</h2>
			<p id="listening-interest">joji</p>
		</div>
		<div className="card p-6 sm:p-8 border-2 border-base-300 join-item flex flex-col gap-2">
			<div className="flex flex-col gap-2">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="24"
					height="24"
					fill="currentColor"
					viewBox="0 0 18 18"
					style={{ border: "none !important;" }}
				>
					<title>wrench</title>
					<path d="M1 0 0 1l2.2 3.081a1 1 0 0 0 .815.419h.07a1 1 0 0 1 .708.293l2.675 2.675-2.617 2.654A3.003 3.003 0 0 0 0 13a3 3 0 1 0 5.878-.851l2.654-2.617.968.968-.305.914a1 1 0 0 0 .242 1.023l3.27 3.27a.997.997 0 0 0 1.414 0l1.586-1.586a.997.997 0 0 0 0-1.414l-3.27-3.27a1 1 0 0 0-1.023-.242L10.5 9.5l-.96-.96 2.68-2.643A3.005 3.005 0 0 0 16 3q0-.405-.102-.777l-2.14 2.141L12 4l-.364-1.757L13.777.102a3 3 0 0 0-3.675 3.68L7.462 6.46 4.793 3.793a1 1 0 0 1-.293-.707v-.071a1 1 0 0 0-.419-.814zm9.646 10.646a.5.5 0 0 1 .708 0l2.914 2.915a.5.5 0 0 1-.707.707l-2.915-2.914a.5.5 0 0 1 0-.708M3 11l.471.242.529.026.287.445.445.287.026.529L5 13l-.242.471-.026.529-.445.287-.287.445-.529.026L3 15l-.471-.242L2 14.732l-.287-.445L1.268 14l-.026-.529L1 13l.242-.471.026-.529.445-.287.287-.445.529-.026z" />
				</svg>
				<h2 className="text-md md:text-lg font-medium">tinkering with</h2>
				<p id="tinkering-interest" className="group">
					<a
						target="_blank"
						rel="noreferrer"
						className="group-hover:text-secondary underline decoration-secondary group-hover:decoration-2 underline-offset-4"
						href="https://deno.com"
					>
						deno
					</a>
					<svg
						className="inline group-hover:translate-x-1 group-hover:scale-125 duration-200 ease-linear transition-transform"
						width="14"
						height="14"
						fill="none"
						viewBox="0 0 24 24"
					>
						<title>arrow</title>
						<path
							stroke="currentColor"
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="1.5"
							d="M17.25 15.25V6.75H8.75"
						/>
						<path
							stroke="currentColor"
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="1.5"
							d="M17 7L6.75 17.25"
						/>
					</svg>
				</p>
			</div>
		</div>
	</div>
);
