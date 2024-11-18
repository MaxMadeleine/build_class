
export class CarModel {
    static async getAllCars() {
        try {
            const { data, error } = await supabase
                .from('cars')
                .select('*')
            
            if(error) {
                throw new Error(error.message)
            }
            return data
        } catch(error) {
            console.error(`Error: Cannot fetch cars, ${error}`)
            throw error
        }
    }

    static async getCarById(id) {
        try {
            const { data, error } = await supabase
                .from('cars')
                .select('*')
                .eq('id', id)
                .single()

            if(error) {
                throw new Error(error.message)
            }
            return data
        } catch(error) {
            console.error(`Error: Cannot fetch car with id ${id}, ${error}`)
            throw error
        }
    }

    static async createCar(carData) {
        try {
            const { data, error } = await supabase
                .from('cars')
                .insert([carData])
                .select()

            if(error) {
                throw new Error(error.message)
            }
            return data[0]
        } catch(error) {
            console.error(`Error: Cannot create car, ${error}`)
            throw error
        }
    }
} 