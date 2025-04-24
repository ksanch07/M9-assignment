export async function fetchEmployees() {
    const response = await fetch('../data/employees.json');
    if (!response.ok) {
        throw new Error('Failed to fetch employee data');
    }
    return await response.json();
}