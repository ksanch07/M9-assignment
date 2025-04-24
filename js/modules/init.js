export async function fetchEmployees() {
    const response = await fetch('../data/employees.json');
    if (!response.ok) {
        throw new Error('Failed to fetch employee data');
    }
    return await response.json();
}

// //json wasn't loading in network debug
// export async function fetchEmployees() {
//     try {
//         const response = await fetch('../data/employees.json');
//         console.log('Fetch response:', response);
//         if (!response.ok) {
//             throw new Error('Failed to fetch employee data');
//         }
//         return await response.json();
//     } catch (error) {
//         console.error('Error fetching employees:', error);
//         throw error;
//     }
// }