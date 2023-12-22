const expensesApi = {
  getTotals: async () => {
    try {
      const options = {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      };

      const res = await fetch(`${window.env.API_URL}/total`, options);
      const json = await res.json();
      return json;
    } catch (err) {
      console.log("Error getting total", err);
    }
  },
  getReports: async () => {
    try {
      // Replace this with call to API
      const token = await window.auth0Client.getTokenSilently();
      const options = {
          method: "GET",
          headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
          },
      };
      const res = await fetch(`${window.env.API_URL}/reports`, options);
      const json = await res.json();
      return json;
      // Replace this with call to API
    } catch (err) {
      console.log("Error getting reports", err);
    }
  },
};

export default expensesApi;
