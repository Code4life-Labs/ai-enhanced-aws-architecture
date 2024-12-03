const {
  BedrockAgentRuntimeClient,
} = require("@aws-sdk/client-bedrock-agent-runtime");
const axios = require("axios");

const systemPrompt =
  "You're an professional solution architect at AWS and working with Solution Architect in a Digital Bank. Help them draw a clear, reliable and structured system architecture.";

function getGeneralPrompt(userQuery) {
  return `
<instruction>
1. Analyze the description of user to know which AWS services can be use in the diagram.
2. Find the suitable Group element icons and Service icons to draw.
3. Create the root tags of diagram with \```xml\n<mxGraphModel><root><mxCell id="0"/><mxCell id="1" parent="0"/></root></mxGraphModel>\```
4. Follow formatting example to satisfy requirements.
5. Put the remaining of diagram to root tags (e.g. DIAGRAM_XML_CONTENT ->  \```xml\n<mxGraphModel><root><mxCell id="0"/><mxCell id="1" parent="0"/>DIAGRAM_XML_CONTENT</root></mxGraphModel>\```).
</instruction>

You must follow these requirements:
<requirements>
- Service icon has service name (e.g. Amazon EC2, Amazon S3, ...).
- Follow the latest architecture icons from AWS.
- Think about the architecture first, you can use some examples that are placed in \```xml\```.
- You can remove the attribute point in style of mxCell tag. (e.g. <mxCell style="points=[[0,0],[0.25,0],[0.5,0],[0.75,0],[1,0],[1,0.25],[1,0.5],[1,0.75],[1,1],[0.75,1],[0.5,1],[0.25,1],[0,1],[0,0.75],[0,0.5],[0,0.25]];..." /> -> <mxCell style="..." />)
</requirements>

The diagram must be followed standard . Similar to this structure:
<formatting_example>
\```xml
<mxGraphModel>
  <root>
    <mxCell id="0"/>
    <mxCell id="1" parent="0"/>
    <mxCell id="2" style="edgeStyle=orthogonalEdgeStyle;rounded=0;orthogonalLoop=1;jettySize=auto;html=1;" edge="1" source="3" target="4" parent="1">
      <mxGeometry relative="1" as="geometry"/>
    </mxCell>
    <mxCell id="3" value="SERVICE_NAME" style="STYLE_ATTRIBUTES" vertex="1" parent="1">
      <mxGeometry x="630" y="220" width="60" height="60" as="geometry"/>
    </mxCell>
    <mxCell id="4" value="SERVICE_NAME" style="STYLE_ATTRIBUTES" vertex="1" parent="1">
      <mxGeometry x="770" y="220" width="60" height="60" as="geometry"/>
    </mxCell>
  </root>
</mxGraphModel>
\```
</formatting_example>

Here are the search result:
$search_results$

Use this description to draw system architecture: <description>${userQuery}</description>
`;
}

/**
 * This lambda function is a sync execution, that meant it has to wait
 * Bedrock Agent response `Diagram as Code` result and continuously send
 * a request to Diagram.NET API to get a `Diagram as Image`.
 * @param {*} ctx
 * @param {*} event
 * @returns
 */
module.exports.handler = async function (ctx, event) {
  const client = new BedrockAgentRuntimeClient();
  const input = {
    body: {
      prompt: "",
      temperature: 0.2,
      p: 0.01,
      k: 0,
      return_likelihoods: "NONE",
    },
    accept: "application/json",
    contentType: "application/json",
    modelId: "",
  };

  try {
    // Send request to Bedrock Agent

    // Send request to Diagram.NET

    return {
      statusCode: 200,
    };
  } catch (error) {
    return {
      statusCode: 500,
    };
  }
};
