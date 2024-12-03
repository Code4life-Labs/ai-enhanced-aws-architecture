# Title: How to draw a AWS System diagram follow Diagram.NET format

## Fundamental attribites
### Root Attributes
Every diagram.net elements will need to be wrapped inside <mxGraphModel></mxGraphModel> and <root></root> like this
```xml
<mxGraphModel>
  <root>
  </root>
</mxGraphModel>
```

But there are some require attributes like <mxCell id="0" /> and <mxCell id="1" parent="0"/> like this
```xml
<mxGraphModel>
  <root>
    <mxCell id="0" />
    <mxCell id="1" parent="0"/>
    <!-- Digram content here -->
  </root>
</mxGraphModel>
```

Note: remember, Diagram.NET require these tags as diagram base, so you need to define these tags first before drawing any elements.

### Types of Element

An diagram will have some elements like:

- Service Icon
- Group (include edges)
- Arrow

### Service Icon Attributes
Attributes of <mxCell /> tag of Service Icon element:

- id: id of element.
- parent
- value: text under icon
- style: define how to draw element, has some attributes like
  - outlineConnect: is outline connect
  - html: boolean value, allow html tags or not?
  - fontSize: define size of text (`mxCell.value` attribute).
  - fontColor: define the color of text.
  - shape (\*): where is the visual of Service Icon come from, value is `mxgraph.aws4.resourceIcon`.
  - resIcon: define the visual of Service Icon.
  - aspect: aspect of height and width, default is `fixed`.

Each icon will have to define dimension in diagram to layout a obvious and clear diagram with <mxGeometry /> tag

```xml
<mxCell id="2" parent="0" value="SERVICE_NAME" style="STYLE_ATTRIBUTES" vertex="1" parent="mxCell_ID">
  <mxGeometry x="x-value" y="y-value" width="w-value" height="h-value" as="geometry"/>
</mxCell>
```

Note: You will be gave some `example diagrams` to let you know know how to draw.

## Group Attributes
Attributes of <mxCell /> tag of Group element:

A group icon will contain Service Icon and has some attributes
- id: id of element.
- value: name of group.
- style: define how to draw element, has some attributes like
  - html: boolean value, allow html tags or not?
  - fontSize: define size of text (`mxCell.value` attribute).
  - fontColor: define the color of text.
  - verticalAlign: direction of vertical align, default is `top`.
  - align: direction of horizontal align, default is `left`.
  - shape (\*): where is the visual of Service Icon come from, value is `mxgraph.aws4.group`.
  - grIcon (\*): define the visual of Group element.
  - container: default is `1`.

General format of Group element

```xml
<mxCell id="2" value="SERVICE_NAME" style="STYLE_ATTRIBUTES" vertex="1" parent="1">
  <mxGeometry x="x-value" y="y-value" width="w-value" height="h-value" as="geometry"/>
</mxCell>
```

## Arrow Attributes
Attributes of <mxCell /> tag of Arrow element:

Note: arrow element cannot exist standalone, it will need 2 Service Icon element

A group icon will contain Service Icon and has some attributes
- id: id of element.
- source: id of source Service Icon element.
- target: id of target Service Icon element.
- style: define how to draw element, has some attributes like
  - html: boolean value, allow html tags or not?
  - edgeStyle: style of edge, default value is `orthogonalEdgeStyle`.
  - orthogonalLoop: depend on `edgeStyle`.
  - jettySize: default value is `auto`.

There is an example how arrow element connect 2 Service Icon element

```xml
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
```

## Tags of elements by type

Some XML Tags to draw Service Icon, Group and Arrow element. You must follow these tags to draw elements exactly.

### Tags of Group element

AWS Cloud
```xml
<mxCell id="mutable_id_value" value="AWS Cloud" style="outlineConnect=0;gradientColor=none;html=1;whiteSpace=wrap;fontSize=12;fontStyle=0;container=1;pointerEvents=0;collapsible=0;recursiveResize=0;shape=mxgraph.aws4.group;grIcon=mxgraph.aws4.group_aws_cloud_alt;strokeColor=#232F3E;fillColor=none;verticalAlign=top;align=left;spacingLeft=30;fontColor=#232F3E;dashed=0;" vertex="1" parent="mutable_element_id_value"><mxGeometry x="mutable_x_value" y="mutable_y_value" width="multable_w_value" height="mutable_h_value" as="geometry"/></mxCell>
```

AWS Account
```xml
<mxCell id="mutable_id_value" value="AWS Account" style="outlineConnect=0;gradientColor=none;html=1;whiteSpace=wrap;fontSize=12;fontStyle=0;container=1;pointerEvents=0;collapsible=0;recursiveResize=0;shape=mxgraph.aws4.group;grIcon=mxgraph.aws4.group_account;strokeColor=#CD2264;fillColor=none;verticalAlign=top;align=left;spacingLeft=30;fontColor=#CD2264;dashed=0;" vertex="1" parent="mutable_element_id_value"><mxGeometry x="mutable_x_value" y="mutable_y_value" width="multable_w_value" height="mutable_h_value" as="geometry"/></mxCell>
```

Region
```xml
<mxCell id="mutable_id_value" value="Region" style="outlineConnect=0;gradientColor=none;html=1;whiteSpace=wrap;fontSize=12;fontStyle=0;container=1;pointerEvents=0;collapsible=0;recursiveResize=0;shape=mxgraph.aws4.group;grIcon=mxgraph.aws4.group_region;strokeColor=#00A4A6;fillColor=none;verticalAlign=top;align=left;spacingLeft=30;fontColor=#147EBA;dashed=1;" vertex="1" parent="mutable_element_id_value"><mxGeometry x="mutable_x_value" y="mutable_y_value" width="multable_w_value" height="mutable_h_value" as="geometry"/></mxCell>
```

Availability Zone
```xml
<mxCell id="mutable_id_value" value="Availability Zone" style="fillColor=none;strokeColor=#147EBA;dashed=1;verticalAlign=top;fontStyle=0;fontColor=#147EBA;whiteSpace=wrap;html=1;" vertex="1" parent="mutable_element_id_value"><mxGeometry x="mutable_x_value" y="mutable_y_value" width="multable_w_value" height="mutable_h_value" as="geometry"/></mxCell>
```

VPC
```xml
<mxCell id="mutable_id_value" value="VPC" style="outlineConnect=0;gradientColor=none;html=1;whiteSpace=wrap;fontSize=12;fontStyle=0;container=1;pointerEvents=0;collapsible=0;recursiveResize=0;shape=mxgraph.aws4.group;grIcon=mxgraph.aws4.group_vpc2;strokeColor=#8C4FFF;fillColor=none;verticalAlign=top;align=left;spacingLeft=30;fontColor=#AAB7B8;dashed=0;" vertex="1" parent="mutable_element_id_value"><mxGeometry x="mutable_x_value" y="mutable_y_value" width="multable_w_value" height="mutable_h_value" as="geometry"/></mxCell>
```

Public subnet
```xml
<mxCell id="mutable_id_value" value="Public subnet" style="outlineConnect=0;gradientColor=none;html=1;whiteSpace=wrap;fontSize=12;fontStyle=0;container=1;pointerEvents=0;collapsible=0;recursiveResize=0;shape=mxgraph.aws4.group;grIcon=mxgraph.aws4.group_security_group;grStroke=0;strokeColor=#7AA116;fillColor=#F2F6E8;verticalAlign=top;align=left;spacingLeft=30;fontColor=#248814;dashed=0;" vertex="1" parent="mutable_element_id_value"><mxGeometry x="mutable_x_value" y="mutable_y_value" width="multable_w_value" height="mutable_h_value" as="geometry"/></mxCell>
```

Private subnet
```xml
<mxCell id="mutable_id_value" value="Private subnet" style="outlineConnect=0;gradientColor=none;html=1;whiteSpace=wrap;fontSize=12;fontStyle=0;container=1;pointerEvents=0;collapsible=0;recursiveResize=0;shape=mxgraph.aws4.group;grIcon=mxgraph.aws4.group_security_group;grStroke=0;strokeColor=#00A4A6;fillColor=#E6F6F7;verticalAlign=top;align=left;spacingLeft=30;fontColor=#147EBA;dashed=0;" vertex="1" parent="mutable_element_id_value"><mxGeometry x="mutable_x_value" y="mutable_y_value" width="multable_w_value" height="mutable_h_value" as="geometry"/></mxCell>
```

Security group
```xml
<mxCell id="mutable_id_value" value="Security group" style="fillColor=none;strokeColor=#DD3522;verticalAlign=top;fontStyle=0;fontColor=#DD3522;whiteSpace=wrap;html=1;" vertex="1" parent="mutable_element_id_value"><mxGeometry x="mutable_x_value" y="mutable_y_value" width="multable_w_value" height="mutable_h_value" as="geometry"/></mxCell>
```

Auto Scaling group
```xml
<mxCell id="mutable_id_value" value="Auto Scaling group" style="outlineConnect=0;gradientColor=none;html=1;whiteSpace=wrap;fontSize=12;fontStyle=0;container=1;pointerEvents=0;collapsible=0;recursiveResize=0;shape=mxgraph.aws4.groupCenter;grIcon=mxgraph.aws4.group_auto_scaling_group;grStroke=1;strokeColor=#D86613;fillColor=none;verticalAlign=top;align=center;fontColor=#D86613;dashed=1;spacingTop=25;" vertex="1" parent="mutable_element_id_value"><mxGeometry x="mutable_x_value" y="mutable_y_value" width="multable_w_value" height="mutable_h_value" as="geometry"/></mxCell>
```

Server contents
```xml
<mxCell id="mutable_id_value" value="Server contents" style="outlineConnect=0;gradientColor=none;html=1;whiteSpace=wrap;fontSize=12;fontStyle=0;container=1;pointerEvents=0;collapsible=0;recursiveResize=0;shape=mxgraph.aws4.group;grIcon=mxgraph.aws4.group_on_premise;strokeColor=#7D8998;fillColor=none;verticalAlign=top;align=left;spacingLeft=30;fontColor=#5A6C86;dashed=0;" vertex="1" parent="mutable_element_id_value"><mxGeometry x="mutable_x_value" y="mutable_y_value" width="multable_w_value" height="mutable_h_value" as="geometry"/></mxCell>
```

Corporate data center
```xml
<mxCell id="mutable_id_value" value="Corporate data center" style="outlineConnect=0;gradientColor=none;html=1;whiteSpace=wrap;fontSize=12;fontStyle=0;container=1;pointerEvents=0;collapsible=0;recursiveResize=0;shape=mxgraph.aws4.group;grIcon=mxgraph.aws4.group_corporate_data_center;strokeColor=#7D8998;fillColor=none;verticalAlign=top;align=left;spacingLeft=30;fontColor=#5A6C86;dashed=0;" vertex="1" parent="mutable_element_id_value"><mxGeometry x="mutable_x_value" y="mutable_y_value" width="multable_w_value" height="mutable_h_value" as="geometry"/></mxCell>
```

AWS Step Functions workflow
```xml
<mxCell id="mutable_id_value" value="AWS Step Functions workflow" style="outlineConnect=0;gradientColor=none;html=1;whiteSpace=wrap;fontSize=12;fontStyle=0;container=1;pointerEvents=0;collapsible=0;recursiveResize=0;shape=mxgraph.aws4.group;grIcon=mxgraph.aws4.group_aws_step_functions_workflow;strokeColor=#CD2264;fillColor=none;verticalAlign=top;align=left;spacingLeft=30;fontColor=#CD2264;dashed=0;" vertex="1" parent="mutable_element_id_value"><mxGeometry x="mutable_x_value" y="mutable_y_value" width="multable_w_value" height="mutable_h_value" as="geometry"/></mxCell>
```

Generic group
```xml
<mxCell id="mutable_id_value" value="Generic group" style="fillColor=#EFF0F3;strokeColor=none;dashed=0;verticalAlign=top;fontStyle=0;fontColor=#232F3D;whiteSpace=wrap;html=1;" vertex="1" parent="mutable_element_id_value"><mxGeometry x="360" y="350" width="130" height="130" as="geometry"/></mxCell>
```

Generic group (Dashed)
```xml
<mxCell id="mutable_id_value" value="Generic group" style="fillColor=none;strokeColor=#5A6C86;dashed=1;verticalAlign=top;fontStyle=0;fontColor=#5A6C86;whiteSpace=wrap;html=1;" vertex="1" parent="mutable_element_id_value"><mxGeometry x="mutable_x_value" y="mutable_y_value" width="multable_w_value" height="mutable_h_value" as="geometry"/></mxCell>
```

### Tags of Service Icon element
Service Icon elements are divided into multiple types

#### General

Internet
```xml
<mxCell id="mutable_id_value" value="Internet" style="sketch=0;outlineConnect=0;fontColor=#232F3E;gradientColor=none;fillColor=#232F3D;strokeColor=none;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;pointerEvents=1;shape=mxgraph.aws4.globe;" vertex="1" parent="mutable_element_id_value"><mxGeometry x="mutable_x_value" y="mutable_y_value" width="60" height="60" as="geometry"/></mxCell>
```

User
```xml
<mxCell id="mutable_id_value" value="User" style="sketch=0;outlineConnect=0;fontColor=#232F3E;gradientColor=none;fillColor=#232F3D;strokeColor=none;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;pointerEvents=1;shape=mxgraph.aws4.user;" vertex="1" parent="mutable_element_id_value"><mxGeometry x="mutable_x_value" y="mutable_y_value" width="60" height="60" as="geometry"/></mxCell>
```

Group of User
```xml
<mxCell id="mutable_id_value" value="Group of User" style="sketch=0;outlineConnect=0;fontColor=#232F3E;gradientColor=none;fillColor=#232F3D;strokeColor=none;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;pointerEvents=1;shape=mxgraph.aws4.users;" vertex="1" parent="mutable_element_id_value"><mxGeometry x="mutable_x_value" y="mutable_y_value" width="60" height="60" as="geometry"/></mxCell>
```

#### Analytic

Amazon QuickSight
```xml
<mxCell id="mutable_id_value" value="Amazon&lt;div&gt;QuickSight&lt;/div&gt;" style="sketch=0;outlineConnect=0;fontColor=#232F3E;fillColor=#8C4FFF;strokeColor=#ffffff;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;shape=mxgraph.aws4.resourceIcon;resIcon=mxgraph.aws4.quicksight;" vertex="1" parent="mutable_element_id_value"><mxGeometry x="mutable_x_value" y="mutable_y_value" width="60" height="60" as="geometry"/></mxCell>
```

Amazon OpenSearch
```xml
<mxCell id="mutable_id_value" value="Amazon&lt;div&gt;OpenSearch&lt;/div&gt;" style="sketch=0;outlineConnect=0;fontColor=#232F3E;fillColor=#8C4FFF;strokeColor=#ffffff;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;shape=mxgraph.aws4.resourceIcon;resIcon=mxgraph.aws4.elasticsearch_service;" vertex="1" parent="mutable_element_id_value"><mxGeometry x="mutable_x_value" y="mutable_y_value" width="60" height="60" as="geometry"/></mxCell>
```

Amazon CloudSearch
```xml
<mxCell id="mutable_id_value" value="Amazon&lt;div&gt;CloudSearch&lt;/div&gt;" style="sketch=0;outlineConnect=0;fontColor=#232F3E;fillColor=#8C4FFF;strokeColor=#ffffff;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;shape=mxgraph.aws4.resourceIcon;resIcon=mxgraph.aws4.cloudsearch2;" vertex="1" parent="mutable_element_id_value"><mxGeometry x="mutable_x_value" y="mutable_y_value" width="60" height="60" as="geometry"/></mxCell>
```

Amazon Kinesis
```xml
<mxCell id="mutable_id_value" value="Amazon&lt;div&gt;Kinesis&lt;/div&gt;" style="sketch=0;outlineConnect=0;fontColor=#232F3E;fillColor=#8C4FFF;strokeColor=#ffffff;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;shape=mxgraph.aws4.resourceIcon;resIcon=mxgraph.aws4.kinesis;" vertex="1" parent="mutable_element_id_value"><mxGeometry x="mutable_x_value" y="mutable_y_value" width="60" height="60" as="geometry"/></mxCell>
```

Amazon Athena
```xml
<mxCell id="mutable_id_value" value="Amazon&lt;div&gt;Athena&lt;/div&gt;" style="sketch=0;outlineConnect=0;fontColor=#232F3E;fillColor=#8C4FFF;strokeColor=#ffffff;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;shape=mxgraph.aws4.resourceIcon;resIcon=mxgraph.aws4.athena;" vertex="1" parent="mutable_element_id_value"><mxGeometry x="mutable_x_value" y="mutable_y_value" width="60" height="60" as="geometry"/></mxCell>
```

Amazon DataZone
```xml
<mxCell id="mutable_id_value" value="Amazon&lt;div&gt;DataZone&lt;/div&gt;" style="sketch=0;outlineConnect=0;fontColor=#232F3E;fillColor=#8C4FFF;strokeColor=#ffffff;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;shape=mxgraph.aws4.resourceIcon;resIcon=mxgraph.aws4.datazone;" vertex="1" parent="mutable_element_id_value"><mxGeometry x="mutable_x_value" y="mutable_y_value" width="60" height="60" as="geometry"/></mxCell>
```

Amazon Glue
```xml
<mxCell id="mutable_id_value" value="Amazon&lt;div&gt;Glue&lt;/div&gt;" style="sketch=0;outlineConnect=0;fontColor=#232F3E;fillColor=#8C4FFF;strokeColor=#ffffff;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;shape=mxgraph.aws4.resourceIcon;resIcon=mxgraph.aws4.glue;" vertex="1" parent="mutable_element_id_value"><mxGeometry x="mutable_x_value" y="mutable_y_value" width="60" height="60" as="geometry"/></mxCell>
```

Amazon FinSpace
```xml
<mxCell id="mutable_id_value" value="Amazon&lt;div&gt;FinSpace&lt;/div&gt;" style="sketch=0;outlineConnect=0;fontColor=#232F3E;fillColor=#8C4FFF;strokeColor=#ffffff;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;shape=mxgraph.aws4.resourceIcon;resIcon=mxgraph.aws4.finspace;" vertex="1" parent="mutable_element_id_value"><mxGeometry x="mutable_x_value" y="mutable_y_value" width="60" height="60" as="geometry"/></mxCell>
```

Amazon EMR
```xml
<mxCell id="mutable_id_value" value="Amazon&lt;div&gt;EMR&lt;/div&gt;" style="sketch=0;outlineConnect=0;fontColor=#232F3E;fillColor=#8C4FFF;strokeColor=#ffffff;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;shape=mxgraph.aws4.resourceIcon;resIcon=mxgraph.aws4.emr;" vertex="1" parent="mutable_element_id_value"><mxGeometry x="mutable_x_value" y="mutable_y_value" width="60" height="60" as="geometry"/></mxCell>
```

#### Compute

Amazon EC2
```xml
<mxCell id="mutable_id_value" value="Amazon&lt;div&gt;EC2&lt;/div&gt;" style="sketch=0;outlineConnect=0;fontColor=#232F3E;fillColor=#ED7100;strokeColor=#ffffff;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;shape=mxgraph.aws4.resourceIcon;resIcon=mxgraph.aws4.ec2;" vertex="1" parent="mutable_element_id_value"><mxGeometry x="mutable_x_value" y="mutable_y_value" width="60" height="60" as="geometry"/></mxCell>
```

Amazon Lambda
```xml
<mxCell id="mutable_id_value" value="Amazon&lt;div&gt;Lambda&lt;/div&gt;" style="sketch=0;outlineConnect=0;fontColor=#232F3E;fillColor=#ED7100;strokeColor=#ffffff;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;shape=mxgraph.aws4.resourceIcon;resIcon=mxgraph.aws4.lambda;" vertex="1" parent="mutable_element_id_value"><mxGeometry x="mutable_x_value" y="mutable_y_value" width="60" height="60" as="geometry"/></mxCell>
```

#### Container

Amazon EKS
```xml
<mxCell id="mutable_id_value" value="Amazon&lt;div&gt;EKS&lt;/div&gt;" style="sketch=0;outlineConnect=0;fontColor=#232F3E;fillColor=#ED7100;strokeColor=#ffffff;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;shape=mxgraph.aws4.resourceIcon;resIcon=mxgraph.aws4.eks;" vertex="1" parent="mutable_element_id_value"><mxGeometry x="mutable_x_value" y="mutable_y_value" width="60" height="60" as="geometry"/></mxCell>
```

Amazon ECR
```xml
<mxCell id="mutable_id_value" value="Amazon&lt;div&gt;ECR&lt;/div&gt;" style="sketch=0;outlineConnect=0;fontColor=#232F3E;fillColor=#ED7100;strokeColor=#ffffff;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;shape=mxgraph.aws4.resourceIcon;resIcon=mxgraph.aws4.ecr;" vertex="1" parent="mutable_element_id_value"><mxGeometry x="mutable_x_value" y="mutable_y_value" width="60" height="60" as="geometry"/></mxCell>
```

Amazon ECS
```xml
<mxCell id="mutable_id_value" value="Amazon&lt;br&gt;ECS" style="sketch=0;outlineConnect=0;fontColor=#232F3E;fillColor=#ED7100;strokeColor=#ffffff;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;shape=mxgraph.aws4.resourceIcon;resIcon=mxgraph.aws4.ecs;" vertex="1" parent="mutable_element_id_value"><mxGeometry x="mutable_x_value" y="mutable_y_value" width="60" height="60" as="geometry"/></mxCell>
```

#### Application Integration

Amazon EventBridge
```xml
<mxCell id="mutable_id_value" value="Amazon&lt;div&gt;EventBridge&lt;/div&gt;" style="sketch=0;outlineConnect=0;fontColor=#232F3E;fillColor=#E7157B;strokeColor=#ffffff;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;shape=mxgraph.aws4.resourceIcon;resIcon=mxgraph.aws4.eventbridge;" vertex="1" parent="mutable_element_id_value"><mxGeometry x="mutable_x_value" y="mutable_y_value" width="60" height="60" as="geometry"/></mxCell>
```

Amazon SNS
```xml
<mxCell id="mutable_id_value" value="Amazon&lt;div&gt;SNS&lt;/div&gt;" style="sketch=0;outlineConnect=0;fontColor=#232F3E;fillColor=#E7157B;strokeColor=#ffffff;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;shape=mxgraph.aws4.resourceIcon;resIcon=mxgraph.aws4.sns;" vertex="1" parent="mutable_element_id_value"><mxGeometry x="mutable_x_value" y="mutable_y_value" width="60" height="60" as="geometry"/></mxCell>
```

Amazon SQS
```xml
<mxCell id="mutable_id_value" value="Amazon&lt;div&gt;SQS&lt;/div&gt;" style="sketch=0;outlineConnect=0;fontColor=#232F3E;fillColor=#E7157B;strokeColor=#ffffff;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;shape=mxgraph.aws4.resourceIcon;resIcon=mxgraph.aws4.sqs;" vertex="1" parent="mutable_element_id_value"><mxGeometry x="mutable_x_value" y="mutable_y_value" width="60" height="60" as="geometry"/></mxCell>
```

#### Database

Amazon Aurora
```xml
<mxCell id="mutable_id_value" value="Amazon&lt;div&gt;Aurora&lt;/div&gt;" style="sketch=0;outlineConnect=0;fontColor=#232F3E;fillColor=#C925D1;strokeColor=#ffffff;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;shape=mxgraph.aws4.resourceIcon;resIcon=mxgraph.aws4.aurora;" vertex="1" parent="mutable_element_id_value"><mxGeometry x="mutable_x_value" y="mutable_y_value" width="60" height="60" as="geometry"/></mxCell>
```

Amazon RDS
```xml
<mxCell id="mutable_id_value" value="Amazon&lt;div&gt;RDS&lt;/div&gt;" style="sketch=0;outlineConnect=0;fontColor=#232F3E;fillColor=#C925D1;strokeColor=#ffffff;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;shape=mxgraph.aws4.resourceIcon;resIcon=mxgraph.aws4.rds;" vertex="1" parent="mutable_element_id_value"><mxGeometry x="mutable_x_value" y="mutable_y_value" width="60" height="60" as="geometry"/></mxCell>
```

Amazon DocumentDB
```xml
<mxCell id="mutable_id_value" value="Amazon&lt;div&gt;DynamoDB&lt;/div&gt;" style="sketch=0;outlineConnect=0;fontColor=#232F3E;fillColor=#C925D1;strokeColor=#ffffff;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;shape=mxgraph.aws4.resourceIcon;resIcon=mxgraph.aws4.dynamodb;" vertex="1" parent="mutable_element_id_value"><mxGeometry x="mutable_x_value" y="mutable_y_value" width="60" height="60" as="geometry"/></mxCell>
```

Amazon Redshift
```xml
<mxCell id="mutable_id_value" value="Amazon&lt;div&gt;Redshift&lt;/div&gt;" style="sketch=0;outlineConnect=0;fontColor=#232F3E;fillColor=#C925D1;strokeColor=#ffffff;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;shape=mxgraph.aws4.resourceIcon;resIcon=mxgraph.aws4.redshift;" vertex="1" parent="mutable_element_id_value"><mxGeometry x="mutable_x_value" y="mutable_y_value" width="60" height="60" as="geometry"/></mxCell>
```

Amazon ElastiCache
```xml
<mxCell id="mutable_id_value" value="Amazon&lt;div&gt;ElastiCache&lt;/div&gt;" style="sketch=0;outlineConnect=0;fontColor=#232F3E;fillColor=#C925D1;strokeColor=#ffffff;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;shape=mxgraph.aws4.resourceIcon;resIcon=mxgraph.aws4.elasticache;" vertex="1" parent="mutable_element_id_value"><mxGeometry x="mutable_x_value" y="mutable_y_value" width="60" height="60" as="geometry"/></mxCell>
```

Amazon Neptune
```xml
<mxCell id="mutable_id_value" value="Amazon&lt;div&gt;Neptune&lt;/div&gt;" style="sketch=0;outlineConnect=0;fontColor=#232F3E;fillColor=#C925D1;strokeColor=#ffffff;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;shape=mxgraph.aws4.resourceIcon;resIcon=mxgraph.aws4.neptune;" vertex="1" parent="mutable_element_id_value"><mxGeometry x="mutable_x_value" y="mutable_y_value" width="60" height="60" as="geometry"/></mxCell>
```

Amazon DynamoDB
```xml
<mxCell id="mutable_id_value" value="Amazon&lt;div&gt;DocumentDB&lt;/div&gt;" style="sketch=0;outlineConnect=0;fontColor=#232F3E;fillColor=#C925D1;strokeColor=#ffffff;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;shape=mxgraph.aws4.resourceIcon;resIcon=mxgraph.aws4.documentdb_with_mongodb_compatibility;" vertex="1" parent="mutable_element_id_value"><mxGeometry x="mutable_x_value" y="mutable_y_value" width="60" height="60" as="geometry"/></mxCell>
```

#### Machine Learning

Amazon Q
```xml
<mxCell id="mutable_id_value" value="Amazon Q" style="sketch=0;outlineConnect=0;fontColor=#232F3E;fillColor=#01A88D;strokeColor=#ffffff;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;shape=mxgraph.aws4.resourceIcon;resIcon=mxgraph.aws4.q;" vertex="1" parent="mutable_element_id_value"><mxGeometry x="mutable_x_value" y="mutable_y_value" width="60" height="60" as="geometry"/></mxCell>
```

Amazon SageMaker
```xml
<mxCell id="mutable_id_value" value="Amazon&lt;div&gt;SageMaker&lt;/div&gt;" style="sketch=0;outlineConnect=0;fontColor=#232F3E;fillColor=#01A88D;strokeColor=#ffffff;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;shape=mxgraph.aws4.resourceIcon;resIcon=mxgraph.aws4.sagemaker;" vertex="1" parent="mutable_element_id_value"><mxGeometry x="mutable_x_value" y="mutable_y_value" width="60" height="60" as="geometry"/></mxCell>
```

Amazon Rekognition
```xml
<mxCell id="mutable_id_value" value="Amazon&lt;div&gt;Rekognition&lt;/div&gt;" style="sketch=0;outlineConnect=0;fontColor=#232F3E;fillColor=#01A88D;strokeColor=#ffffff;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;shape=mxgraph.aws4.resourceIcon;resIcon=mxgraph.aws4.rekognition_2;" vertex="1" parent="mutable_element_id_value"><mxGeometry x="mutable_x_value" y="mutable_y_value" width="60" height="60" as="geometry"/></mxCell>
```

Amazon Kendra
```xml
<mxCell id="mutable_id_value" value="Amazon&lt;div&gt;Kendra&lt;/div&gt;" style="sketch=0;outlineConnect=0;fontColor=#232F3E;fillColor=#01A88D;strokeColor=#ffffff;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;shape=mxgraph.aws4.resourceIcon;resIcon=mxgraph.aws4.kendra;" vertex="1" parent="mutable_element_id_value"><mxGeometry x="mutable_x_value" y="mutable_y_value" width="60" height="60" as="geometry"/></mxCell>
```

Amazon Bedrock
```xml
<mxCell id="mutable_id_value" value="Amazon&lt;div&gt;Bedrock&lt;/div&gt;" style="sketch=0;outlineConnect=0;fontColor=#232F3E;fillColor=#01A88D;strokeColor=#ffffff;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;shape=mxgraph.aws4.resourceIcon;resIcon=mxgraph.aws4.bedrock;" vertex="1" parent="mutable_element_id_value"><mxGeometry x="mutable_x_value" y="mutable_y_value" width="60" height="60" as="geometry"/></mxCell>
```

#### Management Gorvenance

Amazon CloudFormation
```xml
<mxCell id="mutable_id_value" value="Amazon&lt;div&gt;CloudFormation&lt;/div&gt;" style="sketch=0;outlineConnect=0;fontColor=#232F3E;fillColor=#E7157B;strokeColor=#ffffff;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;shape=mxgraph.aws4.resourceIcon;resIcon=mxgraph.aws4.cloudformation;" vertex="1" parent="mutable_element_id_value"><mxGeometry x="mutable_x_value" y="mutable_y_value" width="60" height="60" as="geometry"/></mxCell>
```

Amazon CloudWatch
```xml
<mxCell id="mutable_id_value" value="Amazon&lt;div&gt;CloudWatch&lt;/div&gt;" style="sketch=0;outlineConnect=0;fontColor=#232F3E;fillColor=#E7157B;strokeColor=#ffffff;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;shape=mxgraph.aws4.resourceIcon;resIcon=mxgraph.aws4.cloudwatch_2;" vertex="1" parent="mutable_element_id_value"><mxGeometry x="mutable_x_value" y="mutable_y_value" width="60" height="60" as="geometry"/></mxCell>
```

#### Developer Tools

Amazon X-Ray
```xml
<mxCell id="mutable_id_value" value="Amazon&lt;div&gt;X-Ray&lt;/div&gt;" style="sketch=0;outlineConnect=0;fontColor=#232F3E;fillColor=#C925D1;strokeColor=#ffffff;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;shape=mxgraph.aws4.resourceIcon;resIcon=mxgraph.aws4.xray;" vertex="1" parent="mutable_element_id_value"><mxGeometry x="mutable_x_value" y="mutable_y_value" width="60" height="60" as="geometry"/></mxCell>
```

Amazon CodePipeline
```xml
<mxCell id="mutable_id_value" value="Amazon&lt;div&gt;CodePipeline&lt;/div&gt;" style="sketch=0;outlineConnect=0;fontColor=#232F3E;fillColor=#C925D1;strokeColor=#ffffff;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;shape=mxgraph.aws4.resourceIcon;resIcon=mxgraph.aws4.codepipeline;" vertex="1" parent="mutable_element_id_value"><mxGeometry x="mutable_x_value" y="mutable_y_value" width="60" height="60" as="geometry"/></mxCell>
```

Amazon CodeDeploy
```xml
<mxCell id="mutable_id_value" value="Amazon&lt;div&gt;CodeDeploy&lt;/div&gt;" style="sketch=0;outlineConnect=0;fontColor=#232F3E;fillColor=#C925D1;strokeColor=#ffffff;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;shape=mxgraph.aws4.resourceIcon;resIcon=mxgraph.aws4.codedeploy;" vertex="1" parent="mutable_element_id_value"><mxGeometry x="220" y="1490" width="60" height="60" as="geometry"/></mxCell>
```

Amazon CodeBuild
```xml
<mxCell id="mutable_id_value" value="Amazon&lt;div&gt;CodeBuild&lt;/div&gt;" style="sketch=0;outlineConnect=0;fontColor=#232F3E;fillColor=#C925D1;strokeColor=#ffffff;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;shape=mxgraph.aws4.resourceIcon;resIcon=mxgraph.aws4.codebuild;" vertex="1" parent="mutable_element_id_value"><mxGeometry x="mutable_x_value" y="mutable_y_value" width="60" height="60" as="geometry"/></mxCell>
```

#### Network and Content Delivery Network

API Gateway
```xml
<mxCell id="mutable_id_value" value="API&lt;br&gt;Gateway" style="sketch=0;outlineConnect=0;fontColor=#232F3E;fillColor=#8C4FFF;strokeColor=#ffffff;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;shape=mxgraph.aws4.resourceIcon;resIcon=mxgraph.aws4.api_gateway;" vertex="1" parent="mutable_element_id_value"><mxGeometry x="mutable_x_value" y="mutable_y_value" width="60" height="60" as="geometry"/></mxCell>
```

Amazon CloudFront
```xml
<mxCell id="mutable_id_value" value="Amazon&lt;div&gt;CloudFront&lt;/div&gt;" style="sketch=0;outlineConnect=0;fontColor=#232F3E;fillColor=#8C4FFF;strokeColor=#ffffff;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;shape=mxgraph.aws4.resourceIcon;resIcon=mxgraph.aws4.cloudfront;" vertex="1" parent="mutable_element_id_value"><mxGeometry x="mutable_x_value" y="mutable_y_value" width="60" height="60" as="geometry"/></mxCell>
```

Client VPN
```xml
<mxCell id="mutable_id_value" value="Client&lt;br&gt;VPN" style="sketch=0;outlineConnect=0;fontColor=#232F3E;fillColor=#8C4FFF;strokeColor=#ffffff;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;shape=mxgraph.aws4.resourceIcon;resIcon=mxgraph.aws4.client_vpn;" vertex="1" parent="mutable_element_id_value"><mxGeometry x="mutable_x_value" y="mutable_y_value" width="60" height="60" as="geometry"/></mxCell>
```

Amazon Transit Gateway
```xml
<mxCell id="mutable_id_value" value="Amazon&lt;div&gt;Transit Gateway&lt;/div&gt;" style="sketch=0;outlineConnect=0;fontColor=#232F3E;fillColor=#8C4FFF;strokeColor=#ffffff;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;shape=mxgraph.aws4.resourceIcon;resIcon=mxgraph.aws4.transit_gateway;" vertex="1" parent="mutable_element_id_value"><mxGeometry x="mutable_x_value" y="mutable_y_value" width="60" height="60" as="geometry"/></mxCell>
```

Amazon PrivateLink
```xml
<mxCell id="mutable_id_value" value="Amazon&lt;div&gt;PrivateLink&lt;/div&gt;" style="sketch=0;outlineConnect=0;fontColor=#232F3E;fillColor=#8C4FFF;strokeColor=#ffffff;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;shape=mxgraph.aws4.resourceIcon;resIcon=mxgraph.aws4.vpc_privatelink;" vertex="1" parent="mutable_element_id_value"><mxGeometry x="mutable_x_value" y="mutable_y_value" width="60" height="60" as="geometry"/></mxCell>
```

Amazon Direct Connect
```xml
<mxCell id="mutable_id_value" value="Amazon&lt;div&gt;Direct Connect&lt;/div&gt;" style="sketch=0;outlineConnect=0;fontColor=#232F3E;fillColor=#8C4FFF;strokeColor=#ffffff;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;shape=mxgraph.aws4.resourceIcon;resIcon=mxgraph.aws4.direct_connect;" vertex="1" parent="mutable_element_id_value"><mxGeometry x="mutable_x_value" y="mutable_y_value" width="60" height="60" as="geometry"/></mxCell>
```

Site-to-site VPN
```xml
<mxCell id="mutable_id_value" value="Site-to-site&lt;div&gt;VPN&lt;/div&gt;" style="sketch=0;outlineConnect=0;fontColor=#232F3E;fillColor=#8C4FFF;strokeColor=#ffffff;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;shape=mxgraph.aws4.resourceIcon;resIcon=mxgraph.aws4.site_to_site_vpn;" vertex="1" parent="mutable_element_id_value"><mxGeometry x="mutable_x_value" y="mutable_y_value" width="60" height="60" as="geometry"/></mxCell>
```

Amazon Cloud Map
```xml
<mxCell id="mutable_id_value" value="Amazon&lt;div&gt;Cloud Map&lt;/div&gt;" style="sketch=0;outlineConnect=0;fontColor=#232F3E;fillColor=#8C4FFF;strokeColor=#ffffff;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;shape=mxgraph.aws4.resourceIcon;resIcon=mxgraph.aws4.cloud_map;" vertex="1" parent="mutable_element_id_value"><mxGeometry x="mutable_x_value" y="mutable_y_value" width="60" height="60" as="geometry"/></mxCell>
```

Amazon Route 53
```xml
<mxCell id="mutable_id_value" value="Amazon&lt;div&gt;Route 53&lt;/div&gt;" style="sketch=0;outlineConnect=0;fontColor=#232F3E;fillColor=#8C4FFF;strokeColor=#ffffff;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;shape=mxgraph.aws4.resourceIcon;resIcon=mxgraph.aws4.route_53;" vertex="1" parent="mutable_element_id_value"><mxGeometry x="mutable_x_value" y="mutable_y_value" width="60" height="60" as="geometry"/></mxCell>
```

Amazon GA
```xml
<mxCell id="mutable_id_value" value="Amazon&lt;div&gt;GA&lt;/div&gt;" style="sketch=0;outlineConnect=0;fontColor=#232F3E;fillColor=#8C4FFF;strokeColor=#ffffff;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;shape=mxgraph.aws4.resourceIcon;resIcon=mxgraph.aws4.global_accelerator;" vertex="1" parent="mutable_element_id_value"><mxGeometry x="mutable_x_value" y="mutable_y_value" width="60" height="60" as="geometry"/></mxCell>
```

Amazon App Mesh
```xml
<mxCell id="mutable_id_value" value="Amazon&lt;div&gt;App Mesh&lt;/div&gt;" style="sketch=0;outlineConnect=0;fontColor=#232F3E;fillColor=#8C4FFF;strokeColor=#ffffff;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;shape=mxgraph.aws4.resourceIcon;resIcon=mxgraph.aws4.app_mesh;" vertex="1" parent="mutable_element_id_value"><mxGeometry x="mutable_x_value" y="mutable_y_value" width="60" height="60" as="geometry"/></mxCell>
```

NAT Gateway
```xml
<mxCell id="mutable_id_value" value="NAT&lt;div&gt;Gateway&lt;/div&gt;" style="sketch=0;outlineConnect=0;fontColor=#232F3E;gradientColor=none;fillColor=#8C4FFF;strokeColor=none;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;pointerEvents=1;shape=mxgraph.aws4.nat_gateway;" vertex="1" parent="mutable_element_id_value"><mxGeometry x="mutable_x_value" y="mutable_y_value" width="60" height="60" as="geometry"/></mxCell>
```

Internet Gateway
```xml
<mxCell id="mutable_id_value" value="Internet&lt;div&gt;Gateway&lt;/div&gt;" style="sketch=0;outlineConnect=0;fontColor=#232F3E;gradientColor=none;fillColor=#8C4FFF;strokeColor=none;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;pointerEvents=1;shape=mxgraph.aws4.internet_gateway;" vertex="1" parent="mutable_element_id_value"><mxGeometry x="mutable_x_value" y="mutable_y_value" width="60" height="60" as="geometry"/></mxCell>
```

Network Access Control List
```xml
<mxCell id="mutable_id_value" value="Network Access&lt;div&gt;Control List&lt;/div&gt;" style="sketch=0;outlineConnect=0;fontColor=#232F3E;gradientColor=none;fillColor=#8C4FFF;strokeColor=none;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;pointerEvents=1;shape=mxgraph.aws4.network_access_control_list;" vertex="1" parent="mutable_element_id_value"><mxGeometry x="mutable_x_value" y="mutable_y_value" width="60" height="60" as="geometry"/></mxCell>
```

Peering Connection
```xml
<mxCell id="mutable_id_value" value="Peering&lt;div&gt;Connection&lt;/div&gt;" style="sketch=0;outlineConnect=0;fontColor=#232F3E;gradientColor=none;fillColor=#8C4FFF;strokeColor=none;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;pointerEvents=1;shape=mxgraph.aws4.peering;" vertex="1" parent="mutable_element_id_value"><mxGeometry x="mutable_x_value" y="mutable_y_value" width="60" height="60" as="geometry"/></mxCell>
```

[Service_Name] Endpoint
```xml
<mxCell id="mutable_id_value" value="&lt;div&gt;service_name&lt;/div&gt;Endpoint" style="sketch=0;outlineConnect=0;fontColor=#232F3E;gradientColor=none;fillColor=#8C4FFF;strokeColor=none;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;pointerEvents=1;shape=mxgraph.aws4.endpoints;" vertex="1" parent="mutable_element_id_value"><mxGeometry x="mutable_x_value" y="mutable_y_value" width="60" height="60" as="geometry"/></mxCell>
```

VPN Gateway
```xml
<mxCell id="mutable_id_value" value="VPN&lt;div&gt;Gateway&lt;/div&gt;" style="sketch=0;outlineConnect=0;fontColor=#232F3E;gradientColor=none;fillColor=#8C4FFF;strokeColor=none;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;pointerEvents=1;shape=mxgraph.aws4.vpn_gateway;" vertex="1" parent="mutable_element_id_value"><mxGeometry x="mutable_x_value" y="mutable_y_value" width="60" height="60" as="geometry"/></mxCell>
```

ENI
```xml
<mxCell id="mutable_id_value" value="ENI" style="sketch=0;outlineConnect=0;fontColor=#232F3E;gradientColor=none;fillColor=#8C4FFF;strokeColor=none;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;pointerEvents=1;shape=mxgraph.aws4.elastic_network_interface;" vertex="1" parent="mutable_element_id_value"><mxGeometry x="mutable_x_value" y="mutable_y_value" width="60" height="60" as="geometry"/></mxCell>
```

VPN Connection
```xml
<mxCell id="mutable_id_value" value="VPN&lt;div&gt;Connection&lt;/div&gt;" style="sketch=0;outlineConnect=0;fontColor=#232F3E;gradientColor=none;fillColor=#8C4FFF;strokeColor=none;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;pointerEvents=1;shape=mxgraph.aws4.vpn_connection;" vertex="1" parent="mutable_element_id_value"><mxGeometry x="mutable_x_value" y="mutable_y_value" width="53.85" height="60" as="geometry"/></mxCell>
```

#### Security, Identity & Compliance

Amazon KMS
```xml
<mxCell id="4" value="Amazon&lt;div&gt;KMS&lt;/div&gt;" style="sketch=0;outlineConnect=0;fontColor=#232F3E;fillColor=#DD344C;strokeColor=#ffffff;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;shape=mxgraph.aws4.resourceIcon;resIcon=mxgraph.aws4.key_management_service;" vertex="1" parent="1"><mxGeometry x="mutable_x_value" y="mutable_y_value" width="60" height="60" as="geometry"/></mxCell>
```

Amazon Secrets Manager
```xml
<mxCell id="5" value="Amazon&lt;div&gt;Secrets Manager&lt;/div&gt;" style="sketch=0;outlineConnect=0;fontColor=#232F3E;fillColor=#DD344C;strokeColor=#ffffff;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;shape=mxgraph.aws4.resourceIcon;resIcon=mxgraph.aws4.secrets_manager;" vertex="1" parent="1"><mxGeometry x="mutable_x_value" y="mutable_y_value" width="60" height="60" as="geometry"/></mxCell>
```

Amazon WAF
```xml
<mxCell id="6" value="Amazon&lt;div&gt;WAF&lt;/div&gt;" style="sketch=0;outlineConnect=0;fontColor=#232F3E;fillColor=#DD344C;strokeColor=#ffffff;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;shape=mxgraph.aws4.resourceIcon;resIcon=mxgraph.aws4.waf;" vertex="1" parent="1"><mxGeometry x="mutable_x_value" y="mutable_y_value" width="60" height="60" as="geometry"/></mxCell>
```

Amazon Cognito
```xml
<mxCell id="2" value="Amazon&lt;div&gt;Cognito&lt;/div&gt;" style="sketch=0;outlineConnect=0;fontColor=#232F3E;fillColor=#DD344C;strokeColor=#ffffff;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;shape=mxgraph.aws4.resourceIcon;resIcon=mxgraph.aws4.cognito;" vertex="1" parent="1"><mxGeometry x="mutable_x_value" y="mutable_y_value" width="60" height="60" as="geometry"/></mxCell>
```

Amazon IAM
```xml
<mxCell id="3" value="Amazon&lt;div&gt;IAM&lt;/div&gt;" style="sketch=0;outlineConnect=0;fontColor=#232F3E;fillColor=#DD344C;strokeColor=#ffffff;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;shape=mxgraph.aws4.resourceIcon;resIcon=mxgraph.aws4.identity_and_access_management;" vertex="1" parent="1"><mxGeometry x="mutable_x_value" y="mutable_y_value" width="60" height="60" as="geometry"/></mxCell>
```

#### Storage

Amazon S3
```xml
<mxCell id="mutable_id_value" value="Amazon&lt;div&gt;S3&lt;/div&gt;" style="sketch=0;outlineConnect=0;fontColor=#232F3E;fillColor=#7AA116;strokeColor=#ffffff;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;shape=mxgraph.aws4.resourceIcon;resIcon=mxgraph.aws4.s3;" vertex="1" parent="mutable_element_id_value"><mxGeometry x="mutable_x_value" y="mutable_y_value" width="60" height="60" as="geometry"/></mxCell>
```

Amazon EBS
```xml
<mxCell id="mutable_id_value" value="Amazon&lt;div&gt;EBS&lt;/div&gt;" style="sketch=0;outlineConnect=0;fontColor=#232F3E;fillColor=#7AA116;strokeColor=#ffffff;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;shape=mxgraph.aws4.resourceIcon;resIcon=mxgraph.aws4.elastic_block_store;" vertex="1" parent="mutable_element_id_value"><mxGeometry x="mutable_x_value" y="mutable_y_value" width="60" height="60" as="geometry"/></mxCell>
```

Amazon EFS
```xml
<mxCell id="mutable_id_value" value="Amazon&lt;div&gt;EFS&lt;/div&gt;" style="sketch=0;outlineConnect=0;fontColor=#232F3E;fillColor=#7AA116;strokeColor=#ffffff;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;shape=mxgraph.aws4.resourceIcon;resIcon=mxgraph.aws4.elastic_file_system;" vertex="1" parent="mutable_element_id_value"><mxGeometry x="mutable_x_value" y="mutable_y_value" width="60" height="60" as="geometry"/></mxCell>
```

Storage Gateway
```xml
<mxCell id="mutable_id_value" value="Storage&lt;div&gt;Gateway&lt;/div&gt;" style="sketch=0;points=outlineConnect=0;fontColor=#232F3E;fillColor=#7AA116;strokeColor=#ffffff;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;shape=mxgraph.aws4.resourceIcon;resIcon=mxgraph.aws4.storage_gateway;" vertex="1" parent="mutable_element_id_value"><mxGeometry x="mutable_x_value" y="mutable_y_value" width="60" height="60" as="geometry"/></mxCell>
```

## How to draw?

Content is wrapped inside `[]` is variable.

1. Draw a Service Icon element inside a Group element.
```xml
<mxGraphModel><root><mxCell id="0"/><mxCell id="1" parent="0"/><mxCell id="2" value="group_name" style="outlineConnect=0;gradientColor=none;html=1;whiteSpace=wrap;fontSize=12;fontStyle=0;container=1;pointerEvents=0;collapsible=0;recursiveResize=0;shape=mxgraph.aws4.group;grIcon=mxgraph.aws4.[group_graph_name];strokeColor=#232F3E;fillColor=none;verticalAlign=top;align=left;spacingLeft=30;fontColor=#232F3E;dashed=0;" vertex="1" parent="1"><mxGeometry x="600" y="10" width="200" height="190" as="geometry"/></mxCell><mxCell id="3" value="service_name" style="sketch=0;outlineConnect=0;fontColor=#232F3E;fillColor=#8C4FFF;strokeColor=#ffffff;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;shape=mxgraph.aws4.resourceIcon;resIcon=mxgraph.aws4.[service_graph_name];" vertex="1" parent="2"><mxGeometry x="70" y="65" width="60" height="60" as="geometry"/></mxCell></root></mxGraphModel>
```

2. Draw 2 Service Icon elements connect to each other with Arrow element.
```xml
<mxGraphModel><root><mxCell id="0"/><mxCell id="1" parent="0"/><mxCell id="2" style="edgeStyle=orthogonalEdgeStyle;rounded=0;orthogonalLoop=1;jettySize=auto;html=1;" edge="1" source="3" target="4" parent="1"><mxGeometry relative="1" as="geometry"/></mxCell><mxCell id="3" value="service_name" style="sketch=0;outlineConnect=0;fontColor=#232F3E;fillColor=#8C4FFF;strokeColor=#ffffff;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;shape=mxgraph.aws4.resourceIcon;resIcon=mxgraph.aws4.[service_graph_name];" vertex="1" parent="1"><mxGeometry x="600" y="270" width="60" height="60" as="geometry"/></mxCell><mxCell id="4" value="service_name" style="sketch=0;outlineConnect=0;fontColor=#232F3E;fillColor=#8C4FFF;strokeColor=#ffffff;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;shape=mxgraph.aws4.resourceIcon;resIcon=mxgraph.aws4.[service_graph_name];" vertex="1" parent="1"><mxGeometry x="760" y="270" width="60" height="60" as="geometry"/></mxCell></root></mxGraphModel>
```

3. Draw 2 Service Icon elements connect to each other with Arrow element inside a Group element.
```xml
<mxGraphModel><root><mxCell id="0"/><mxCell id="1" parent="0"/><mxCell id="2" value="group_name" style="outlineConnect=0;gradientColor=none;html=1;whiteSpace=wrap;fontSize=12;fontStyle=0;container=1;pointerEvents=0;collapsible=0;recursiveResize=0;shape=mxgraph.aws4.group;grIcon=mxgraph.aws4.[group_graph_name];strokeColor=#232F3E;fillColor=none;verticalAlign=top;align=left;spacingLeft=30;fontColor=#232F3E;dashed=0;" vertex="1" parent="1"><mxGeometry x="600" y="455" width="400" height="190" as="geometry"/></mxCell><mxCell id="3" style="edgeStyle=orthogonalEdgeStyle;rounded=0;orthogonalLoop=1;jettySize=auto;html=1;" edge="1" parent="2" source="4" target="5"><mxGeometry relative="1" as="geometry"/></mxCell><mxCell id="4" value="service_name" style="sketch=0;outlineConnect=0;fontColor=#232F3E;fillColor=#8C4FFF;strokeColor=#ffffff;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;shape=mxgraph.aws4.resourceIcon;resIcon=mxgraph.aws4.[service_graph_name];" vertex="1" parent="2"><mxGeometry x="65" y="65" width="60" height="60" as="geometry"/></mxCell><mxCell id="5" value="service_name" style="sketch=0;outlineConnect=0;fontColor=#232F3E;fillColor=#8C4FFF;strokeColor=#ffffff;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;shape=mxgraph.aws4.resourceIcon;resIcon=mxgraph.aws4.[service_graph_name];" vertex="1" parent="2"><mxGeometry x="275" y="65" width="60" height="60" as="geometry"/></mxCell></root></mxGraphModel>
```

4. Draw a Service Icon element connect to 2 different Service Icon elements with 2 Arrow elements.
```xml
<mxGraphModel><root><mxCell id="0"/><mxCell id="1" parent="0"/><mxCell id="2" style="edgeStyle=orthogonalEdgeStyle;rounded=0;orthogonalLoop=1;jettySize=auto;html=1;" edge="1" source="4" target="6" parent="1"><mxGeometry relative="1" as="geometry"/></mxCell><mxCell id="3" style="edgeStyle=orthogonalEdgeStyle;rounded=0;orthogonalLoop=1;jettySize=auto;html=1;" edge="1" source="4" target="5" parent="1"><mxGeometry relative="1" as="geometry"/></mxCell><mxCell id="4" value="service_name" style="sketch=0;outlineConnect=0;fontColor=#232F3E;fillColor=#8C4FFF;strokeColor=#ffffff;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;shape=mxgraph.aws4.resourceIcon;resIcon=mxgraph.aws4.[service_graph_name];" vertex="1" parent="1"><mxGeometry x="1280" y="40" width="60" height="60" as="geometry"/></mxCell><mxCell id="5" value="service_name" style="sketch=0;outlineConnect=0;fontColor=#232F3E;fillColor=#8C4FFF;strokeColor=#ffffff;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;shape=mxgraph.aws4.resourceIcon;resIcon=mxgraph.aws4.[service_graph_name];" vertex="1" parent="1"><mxGeometry x="1440" y="40" width="60" height="60" as="geometry"/></mxCell><mxCell id="6" value="service_name" style="sketch=0;outlineConnect=0;fontColor=#232F3E;fillColor=#8C4FFF;strokeColor=#ffffff;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;shape=mxgraph.aws4.resourceIcon;resIcon=mxgraph.aws4.[service_graph_name];" vertex="1" parent="1"><mxGeometry x="1280" y="200" width="60" height="60" as="geometry"/></mxCell></root></mxGraphModel>
```

5. Draw a Service Icon element outside of a Group element and another Service Icon element inside that Group element.
```xml
<mxGraphModel><root><mxCell id="0"/><mxCell id="1" parent="0"/><mxCell id="2" value="group_name" style="outlineConnect=0;gradientColor=none;html=1;whiteSpace=wrap;fontSize=12;fontStyle=0;container=1;pointerEvents=0;collapsible=0;recursiveResize=0;shape=mxgraph.aws4.group;grIcon=mxgraph.aws4.[group_graph_name];strokeColor=#232F3E;fillColor=none;verticalAlign=top;align=left;spacingLeft=30;fontColor=#232F3E;dashed=0;" vertex="1" parent="1"><mxGeometry x="1420" y="440" width="200" height="190" as="geometry"/></mxCell><mxCell id="3" value="service_name" style="sketch=0;outlineConnect=0;fontColor=#232F3E;fillColor=#8C4FFF;strokeColor=#ffffff;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;shape=mxgraph.aws4.resourceIcon;resIcon=mxgraph.aws4.[service_graph_name];" vertex="1" parent="2"><mxGeometry x="70" y="65" width="60" height="60" as="geometry"/></mxCell><mxCell id="4" value="service_name" style="sketch=0;outlineConnect=0;fontColor=#232F3E;fillColor=#8C4FFF;strokeColor=#ffffff;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;shape=mxgraph.aws4.resourceIcon;resIcon=mxgraph.aws4.[service_graph_name];" vertex="1" parent="1"><mxGeometry x="1280" y="505" width="60" height="60" as="geometry"/></mxCell></root></mxGraphModel>
```

6. Draw a Service Icon element outside of a Group element and another Service Icon element inside that Group element and 2 Service Icon elements connect to each other.
```xml
<mxGraphModel><root><mxCell id="0"/><mxCell id="1" parent="0"/><mxCell id="2" value="group_name" style="outlineConnect=0;gradientColor=none;html=1;whiteSpace=wrap;fontSize=12;fontStyle=0;container=1;pointerEvents=0;collapsible=0;recursiveResize=0;shape=mxgraph.aws4.group;grIcon=mxgraph.aws4.[group_graph_name];strokeColor=#232F3E;fillColor=none;verticalAlign=top;align=left;spacingLeft=30;fontColor=#232F3E;dashed=0;" vertex="1" parent="1"><mxGeometry x="2220" y="40" width="200" height="190" as="geometry"/></mxCell><mxCell id="3" value="service_name" style="sketch=0;outlineConnect=0;fontColor=#232F3E;fillColor=#8C4FFF;strokeColor=#ffffff;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;shape=mxgraph.aws4.resourceIcon;resIcon=mxgraph.aws4.[service_graph_name];" vertex="1" parent="2"><mxGeometry x="70" y="65" width="60" height="60" as="geometry"/></mxCell><mxCell id="4" style="edgeStyle=orthogonalEdgeStyle;rounded=0;orthogonalLoop=1;jettySize=auto;html=1;" edge="1" source="5" target="3" parent="1"><mxGeometry relative="1" as="geometry"/></mxCell><mxCell id="5" value="service_name" style="sketch=0;outlineConnect=0;fontColor=#232F3E;fillColor=#8C4FFF;strokeColor=#ffffff;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;shape=mxgraph.aws4.resourceIcon;resIcon=mxgraph.aws4.[service_graph_name];" vertex="1" parent="1"><mxGeometry x="2080" y="105" width="60" height="60" as="geometry"/></mxCell></root></mxGraphModel>
```

7. Draw a Service Icon element inside of a Group element and connect to a Service Icon element which is inside another Group element.
```xml
<mxGraphModel><root><mxCell id="0"/><mxCell id="1" parent="0"/><mxCell id="2" value="group_name" style="outlineConnect=0;gradientColor=none;html=1;whiteSpace=wrap;fontSize=12;fontStyle=0;container=1;pointerEvents=0;collapsible=0;recursiveResize=0;shape=mxgraph.aws4.group;grIcon=mxgraph.aws4.[group_graph_name];strokeColor=#232F3E;fillColor=none;verticalAlign=top;align=left;spacingLeft=30;fontColor=#232F3E;dashed=0;" vertex="1" parent="1"><mxGeometry x="2390" y="350" width="200" height="190" as="geometry"/></mxCell><mxCell id="3" value="service_name" style="sketch=0;outlineConnect=0;fontColor=#232F3E;fillColor=#8C4FFF;strokeColor=#ffffff;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;shape=mxgraph.aws4.resourceIcon;resIcon=mxgraph.aws4.[service_graph_name];" vertex="1" parent="2"><mxGeometry x="70" y="65" width="60" height="60" as="geometry"/></mxCell><mxCell id="4" value="group_name" style="outlineConnect=0;gradientColor=none;html=1;whiteSpace=wrap;fontSize=12;fontStyle=0;container=1;pointerEvents=0;collapsible=0;recursiveResize=0;shape=mxgraph.aws4.group;grIcon=mxgraph.aws4.[group_graph_name];strokeColor=#232F3E;fillColor=none;verticalAlign=top;align=left;spacingLeft=30;fontColor=#232F3E;dashed=0;" vertex="1" parent="1"><mxGeometry x="2080" y="350" width="200" height="190" as="geometry"/></mxCell><mxCell id="5" value="service_name" style="sketch=0;outlineConnect=0;fontColor=#232F3E;fillColor=#8C4FFF;strokeColor=#ffffff;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;shape=mxgraph.aws4.resourceIcon;resIcon=mxgraph.aws4.[service_graph_name];" vertex="1" parent="4"><mxGeometry x="70" y="65" width="60" height="60" as="geometry"/></mxCell><mxCell id="6" style="edgeStyle=orthogonalEdgeStyle;rounded=0;orthogonalLoop=1;jettySize=auto;html=1;" edge="1" source="5" target="3" parent="1"><mxGeometry relative="1" as="geometry"/></mxCell></root></mxGraphModel>
```

8. Draw a Group element (nested group) inside another Group element.
```xml
<mxGraphModel><root><mxCell id="0"/><mxCell id="1" parent="0"/><mxCell id="2" value="group_name" style="outlineConnect=0;gradientColor=none;html=1;whiteSpace=wrap;fontSize=12;fontStyle=0;container=1;pointerEvents=0;collapsible=0;recursiveResize=0;shape=mxgraph.aws4.group;grIcon=mxgraph.aws4.[group_graph_name];strokeColor=#232F3E;fillColor=none;verticalAlign=top;align=left;spacingLeft=30;fontColor=#232F3E;dashed=0;" vertex="1" parent="1"><mxGeometry x="2840" y="10" width="200" height="190" as="geometry"/></mxCell><mxCell id="3" value="group_name" style="outlineConnect=0;gradientColor=none;html=1;whiteSpace=wrap;fontSize=12;fontStyle=0;container=1;pointerEvents=0;collapsible=0;recursiveResize=0;shape=mxgraph.aws4.group;grIcon=mxgraph.aws4.[group_graph_name];grStroke=0;strokeColor=#7AA116;fillColor=#F2F6E8;verticalAlign=top;align=left;spacingLeft=30;fontColor=#248814;dashed=0;" vertex="1" parent="2"><mxGeometry x="35" y="40" width="130" height="130" as="geometry"/></mxCell></root></mxGraphModel>
```

9. Draw a Service Icon element inside of a Nested Group element and they are inside another Group element.
```xml
<mxGraphModel><root><mxCell id="0"/><mxCell id="1" parent="0"/><mxCell id="2" value="group_name" style="outlineConnect=0;gradientColor=none;html=1;whiteSpace=wrap;fontSize=12;fontStyle=0;container=1;pointerEvents=0;collapsible=0;recursiveResize=0;shape=mxgraph.aws4.group;grIcon=mxgraph.aws4.[group_graph_name];strokeColor=#232F3E;fillColor=none;verticalAlign=top;align=left;spacingLeft=30;fontColor=#232F3E;dashed=0;" vertex="1" parent="1"><mxGeometry x="2840" y="315" width="200" height="215" as="geometry"/></mxCell><mxCell id="3" value="group_name" style="outlineConnect=0;gradientColor=none;html=1;whiteSpace=wrap;fontSize=12;fontStyle=0;container=1;pointerEvents=0;collapsible=0;recursiveResize=0;shape=mxgraph.aws4.group;grIcon=mxgraph.aws4.[group_graph_name];grStroke=0;strokeColor=#7AA116;fillColor=#F2F6E8;verticalAlign=top;align=left;spacingLeft=30;fontColor=#248814;dashed=0;" vertex="1" parent="2"><mxGeometry x="35" y="40" width="130" height="150" as="geometry"/></mxCell><mxCell id="4" value="service_name" style="sketch=0;outlineConnect=0;fontColor=#232F3E;fillColor=#8C4FFF;strokeColor=#ffffff;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;shape=mxgraph.aws4.resourceIcon;resIcon=mxgraph.aws4.[service_graph_name];" vertex="1" parent="3"><mxGeometry x="35" y="35" width="60" height="60" as="geometry"/></mxCell></root></mxGraphModel>
```

10. Draw a Service Icon element inside of a Nested Group element and they are inside another Group element and the inner Service Icon connects to ouside Service Icon.
```xml
<mxGraphModel><root><mxCell id="0"/><mxCell id="1" parent="0"/><mxCell id="2" value="group_name" style="outlineConnect=0;gradientColor=none;html=1;whiteSpace=wrap;fontSize=12;fontStyle=0;container=1;pointerEvents=0;collapsible=0;recursiveResize=0;shape=mxgraph.aws4.group;grIcon=mxgraph.aws4.[group_graph_name];strokeColor=#232F3E;fillColor=none;verticalAlign=top;align=left;spacingLeft=30;fontColor=#232F3E;dashed=0;" vertex="1" parent="1"><mxGeometry x="3000" y="620" width="200" height="215" as="geometry"/></mxCell><mxCell id="3" value="group_name" style="outlineConnect=0;gradientColor=none;html=1;whiteSpace=wrap;fontSize=12;fontStyle=0;container=1;pointerEvents=0;collapsible=0;recursiveResize=0;shape=mxgraph.aws4.group;grIcon=mxgraph.aws4.[group_graph_name];grStroke=0;strokeColor=#7AA116;fillColor=#F2F6E8;verticalAlign=top;align=left;spacingLeft=30;fontColor=#248814;dashed=0;" vertex="1" parent="2"><mxGeometry x="35" y="40" width="130" height="150" as="geometry"/></mxCell><mxCell id="4" value="service_name" style="sketch=0;outlineConnect=0;fontColor=#232F3E;fillColor=#8C4FFF;strokeColor=#ffffff;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;shape=mxgraph.aws4.resourceIcon;resIcon=mxgraph.aws4.[service_graph_name];" vertex="1" parent="3"><mxGeometry x="35" y="35" width="60" height="60" as="geometry"/></mxCell><mxCell id="5" style="edgeStyle=orthogonalEdgeStyle;rounded=0;orthogonalLoop=1;jettySize=auto;html=1;" edge="1" source="6" target="4" parent="1"><mxGeometry relative="1" as="geometry"/></mxCell><mxCell id="6" value="service_name" style="sketch=0;outlineConnect=0;fontColor=#232F3E;fillColor=#8C4FFF;strokeColor=#ffffff;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;shape=mxgraph.aws4.resourceIcon;resIcon=mxgraph.aws4.[service_graph_name];" vertex="1" parent="1"><mxGeometry x="2840" y="695" width="60" height="60" as="geometry"/></mxCell></root></mxGraphModel>
```

### Rules of Nested Group

1. Group elements can wraps every Service Icon inside it, at least 1 Service Icon.
2. `AWS Cloud` is the biggest group, second is `AWS Account`, third is `Region`, fouth is `Availability Zone`, fifth is `VPC`, sixth is `Public subnet` or `Public subnet` and the smallet can be `Security group` or `Generic group`.
3. Some group like `Corporate data center` and `Server contents` are outside of `AWS Cloud`. And `Generic group` can be outside of `AWS Group`.
4. `AWS Cloud` is required.