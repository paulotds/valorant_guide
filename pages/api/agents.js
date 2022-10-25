import { apiBase } from '../../lib/valorant-api'

export default async (req, res)  => {
    const result = await fetch(`${apiBase}/agents`);
    const json = await result.json();
    
    res.status(200).json({
        list: json.data
    });
}
  