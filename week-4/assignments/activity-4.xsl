<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0"
    xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
    <xsl:template match="/">
        <html>
            <body>
                <h2>Products Table 1</h2>
                <table border="2">
                    <tr bgcolor="#9acd32">
                        <th>Product name</th>
                        <th>Manufacturer ID</th>
                        <th>Description</th>
                        <th>Price (USD)</th>
                    </tr>
                    <xsl:for-each select="products/product">
                        <xsl:if test="@shippable='true' ">
                            <tr bgcolor="#d8d8d8">
                                <td>
                                    <xsl:value-of select="productName"/>
                                </td>
                                <td>
                                    <span style="font-weight: bold;">
                                        <xsl:value-of select="manufacturer"/>
                                    </span>
                                </td>
                                <td>
                                    <span style="color: green;">
                                        <xsl:value-of select="description"/>
                                    </span>
                                </td>
                                <td>
                                    <span style = "color:blue;">
                                        <xsl:value-of select="prices/price[1]"/>
                                    </span>
                                </td>
                            </tr>
                        </xsl:if>
                    </xsl:for-each>
                </table>
                <h2>Products Table 2</h2>
                <table border="2">
                    <tr bgcolor="#9acd32">
                        <th>Product name</th>
                        <th>Manufacturer ID</th>
                        <th>Price (USD)</th>
                        <th>Price(Euro)</th>
                    </tr>
                    <xsl:for-each select="products/product">
                        <xsl:if test="manufacturer/@id='acme'">
                            <tr bgcolor="#d8d8d8">
                                <td>
                                    <xsl:value-of select="productName"/>
                                </td>
                                <td>
                                    <span style="font-weight: bold;">
                                        <xsl:value-of select="manufacturer"/>
                                    </span>
                                </td>
                                <td>
                                    <span style = "color:blue;">
                                        <xsl:value-of select="prices/price[1]"/>
                                    </span>
                                </td>
                                <td>
                                    <span style = "color:red;">
                                        <xsl:value-of select="prices/price[3]"/>
                                    </span>
                                </td>
                            </tr>
                        </xsl:if>
                    </xsl:for-each>
                </table>
            </body>
        </html>
    </xsl:template>
</xsl:stylesheet>
