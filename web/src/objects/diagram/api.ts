// Import classes
import { API } from "src/classes/api";

const endpoints = {
  diagram: `${import.meta.env.VITE_API_GATEWAY_ENPOINT}/api/diagram`,
  diagrams: `${import.meta.env.VITE_API_GATEWAY_ENPOINT}/api/diagrams`,
};

const api = new API();

export const DiagramAPI = {
  /**
   * Request to generate a diagram with `description`
   * @param description
   */
  async generateDiagram(description: string) {
    try {
      // response.data has pipe
      return await api.post<{ description: string }, any>(
        endpoints.diagram,
        { description },
        { responseType: "stream" }
      );
    } catch (e) {
      console.error(e);
      throw e;
    }
  },
};
