const getState = ({ getStore, setStore, getActions }) => {
	return {
		store: {
			contacts: [],
			test: "paolo"
			//Your data structures, A.K.A Entities
		},
		actions: {
			//(Arrow) Functions that update the Store
			// Remember to use the scope: scope.state.store & scope.setState()
			loadAgendaSlug() {
				const url = "https://3000-fc626224-2fdb-4187-9bd6-5d725c4d3771.ws-us02.gitpod.io/person";

				fetch(url)
					.then(res => res.json())
					.then(result => {
						console.log("ddddddd", result);
						setStore({
							contacts: result
						});
					})
					.catch(e => console.error(e));
			},
			addContact(name, address, email, phone) {
				fetch("https://3000-fc626224-2fdb-4187-9bd6-5d725c4d3771.ws-us02.gitpod.io/person", {
					method: "POST",
					headers: { "Content-Type": "application/json" },
					body: JSON.stringify({
						full_name: name,
						email: email,
						address: address,
						phone: phone,
						agenda_slug: "downtown_xii"
					})
				});
			},
			deleteContact: id => {
				const url = "https://3000-fc626224-2fdb-4187-9bd6-5d725c4d3771.ws-us02.gitpod.io/person/" + id;

				fetch(url, {
					method: "POST",
					headers: { "Content-Type": "application/json" }
				});
				// .then(res => res.json())
				// .then(result => {
				// 	console.log("dddddd", result);
				// 	setStore({
				// 		contacts: result
				// 	});
				// })
				// .catch(e => console.error(e));
			},
			updateContact(id, name, address, email, phone) {
				fetch("https://3000-fc626224-2fdb-4187-9bd6-5d725c4d3771.ws-us02.gitpod.io/person/" + id, {
					method: "PUT",
					headers: { "Content-Type": "application/json" },
					body: JSON.stringify({
						full_name: name,
						email: email,
						address: address,
						phone: phone,
						agenda_slug: "downtown_xii"
					})
				});
			}
		}
	};
};

export default getState;
