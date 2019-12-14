const getState = ({ getStore, setStore, getActions }) => {
	return {
		store: {
			contacts: []
			//Your data structures, A.K.A Entities
		},
		actions: {
			//(Arrow) Functions that update the Store
			// Remember to use the scope: scope.state.store & scope.setState()
			loadAgendaSlug() {
				const url = "https://assets.breatheco.de/apis/fake/contact/agenda/downtown_xii";

				fetch(url)
					.then(res => res.json())
					.then(result => {
						console.log("kkkkkkkkkkkkk", result);
						setStore({
							contacts: result
						});
					})
					.catch(e => console.error(e));
			}
		}
	};
};

export default getState;
