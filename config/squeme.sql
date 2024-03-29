/*for production use snake case not camel case*/

CREATE TABLE Leads(
    _id int(11) UNSIGNED NOT NULL AUTO_INCREMENT,
    leadName VARCHAR(255) NOT NULL,
    whatsapp VARCHAR(20) NOT NULL,
    email VARCHAR(255) NOT NULL,
    leadState VARCHAR(2),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    PRIMARY key (_id)
);

CREATE TABLE Segmentation(
    _id int(11) UNSIGNED NOT NULL AUTO_INCREMENT,
    segmentName VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    PRIMARY KEY (_id)
);
/*

logical - error, droped;

CREATE TABLE Sends(
    _id int(11) UNSIGNED NOT NULL AUTO_INCREMENT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    body_message LONGTEXT NOT NULL,
    PRIMARY KEY(_id)
);
*/

CREATE TABLE Segmentation_Leads(
    segmentation_id INT(11) UNSIGNED NOT NULL,
    lead_id INT(11) UNSIGNED NOT NULL,
    PRIMARY KEY (segmentation_id, lead_id),
    FOREIGN KEY (segmentation_id) REFERENCES Segmentation(_id),
    FOREIGN KEY (lead_id) REFERENCES Leads(_id)
); 
CREATE TABLE Lists(
    _id int(11) UNSIGNED NOT NULL AUTO_INCREMENT,
    list_name VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    PRIMARY KEY (_id)
);
CREATE TABLE Lists_Leads(
    lead_id INT(11) UNSIGNED NOT NULL,
    list_id INT(11) UNSIGNED NOT NULL,
    PRIMARY KEY (lead_id, list_id),
    FOREIGN KEY (lead_id) REFERENCES Leads(_id),
    FOREIGN KEY (list_id) REFERENCES Lists(_id)
);
INSERT INTO `Lists` VALUES (DEFAULT, 'lista1', DEFAULT, DEFAULT); 
SELECT * FROM `Lists`;
INSERT INTO `Lists_Leads` VALUES(1,1);

SELECT Leads.`leadName`, Lists.list_name FROM `Leads` INNER JOIN `Lists_Leads` ON Leads._id = Lists_Leads.lead_id
INNER JOIN `Lists` ON Lists_Leads.list_id = Lists._id;

SELECT * FROM `Lists`;
INSERT INTO `Leads` VALUES (DEFAULT, 'andressa caceres', '(23) 9818-9058', 'andycereces@gmail.com', 'RS', DEFAULT, DEFAULT);
INSERT INTO `Segmentation` VALUES (DEFAULT, 'premiuns', '2022-01-12 23:08:12', '2022-01-12 23:08:12');

SELECT * FROM `Leads`;
SELECT * FROM `Segmentation`;

INSERT INTO `Segmentation_Leads` VALUES (1,2);

SELECT Leads.leadName, Segmentation.segmentName FROM `Leads`
INNER JOIN `Segmentation_Leads` ON Leads._id = Segmentation_Leads.lead_id
INNER JOIN  `Segmentation` on Segmentation_Leads.segmentation_id = Segmentation._id ORDER BY Leads._id;

UPDATE Leads SET leadName = 'alberth henrique', whatsapp = '+556198384', 
email = 'alberthhls@protonmail.com', leadState = 'RS' 
WHERE _id = 1;

DELETE FROM Leads WHERE _id = 1;